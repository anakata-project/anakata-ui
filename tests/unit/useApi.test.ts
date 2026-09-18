import { describe, expect, it, vi } from 'vitest'
import { ApiError, createApiClient } from '../../app/composables/useApi'
import type { ApiFetch } from '../../app/composables/useApi'

function csrfError(status: number, message: string) {
  return Object.assign(new Error(message), {
    status,
    data: { message },
  })
}

function header(options: unknown, name: string): string | null {
  if (typeof options !== 'object' || options === null || !('headers' in options)) {
    return null
  }

  return new Headers(options.headers as HeadersInit).get(name)
}

describe('createApiClient', () => {
  it('does not fetch the csrf cookie on GET', async () => {
    const fetchImpl = vi.fn<ApiFetch>(async () => ({ ok: true }))
    const client = createApiClient({
      baseURL: 'http://localhost:8000',
      isClient: true,
      fetchImpl,
      readXsrfToken: () => 'token',
    })

    await client.request('/api/health')

    expect(fetchImpl).toHaveBeenCalledTimes(1)
    expect(fetchImpl.mock.calls[0]?.[0]).toBe('/api/health')
    expect(header(fetchImpl.mock.calls[0]?.[1], 'X-XSRF-TOKEN')).toBeNull()
  })

  it('fetches the csrf cookie once, then re-reads the cookie on every mutation', async () => {
    let token = 'token-one'
    const fetchImpl = vi.fn<ApiFetch>(async () => ({ ok: true }))
    const client = createApiClient({
      baseURL: 'http://localhost:8000',
      isClient: true,
      fetchImpl,
      readXsrfToken: () => token,
    })

    await client.request('/api/bookings', { method: 'POST' })
    token = 'token-two'
    await client.request('/api/bookings', { method: 'PATCH' })

    const urls = fetchImpl.mock.calls.map(call => call[0])

    expect(urls).toEqual([
      '/sanctum/csrf-cookie',
      '/api/bookings',
      '/api/bookings',
    ])
    expect(header(fetchImpl.mock.calls[1]?.[1], 'X-XSRF-TOKEN')).toBe('token-one')
    expect(header(fetchImpl.mock.calls[2]?.[1], 'X-XSRF-TOKEN')).toBe('token-two')
  })

  it('maps 401, 403, 409 and 422 to ApiError', async () => {
    const fetchImpl = vi.fn<ApiFetch>(async () => {
      throw Object.assign(new Error('Unauthenticated.'), {
        status: 401,
        data: { message: 'Unauthenticated.' },
      })
    })
    const client = createApiClient({
      baseURL: 'http://localhost:8000',
      isClient: true,
      fetchImpl,
      readXsrfToken: () => 'token',
    })

    await expect(client.request('/api/me')).rejects.toMatchObject({
      name: 'ApiError',
      status: 401,
      message: 'Unauthenticated.',
    })

    fetchImpl.mockRejectedValueOnce(Object.assign(new Error('Forbidden'), {
      status: 403,
      data: { message: 'Forbidden' },
    }))
    await expect(client.request('/api/me')).rejects.toMatchObject({ status: 403 })

    fetchImpl.mockRejectedValueOnce(Object.assign(new Error('Conflict'), {
      status: 409,
      data: { message: 'Conflict' },
    }))
    await expect(client.request('/api/me')).rejects.toMatchObject({ status: 409 })

    fetchImpl.mockRejectedValueOnce(Object.assign(new Error('The given data was invalid.'), {
      status: 422,
      data: {
        message: 'The given data was invalid.',
        errors: { email: ['Required.'] },
      },
    }))
    await expect(client.request('/api/me')).rejects.toMatchObject({
      status: 422,
      errors: { email: ['Required.'] },
    })
  })

  it('does not map 500 to ApiError', async () => {
    const fetchImpl = vi.fn<ApiFetch>(async () => {
      throw Object.assign(new Error('Server error'), { status: 500 })
    })
    const client = createApiClient({
      baseURL: 'http://localhost:8000',
      isClient: true,
      fetchImpl,
      readXsrfToken: () => 'token',
    })

    await expect(client.request('/api/me')).rejects.not.toBeInstanceOf(ApiError)
  })

  it('retries a 419 once after refreshing the csrf cookie', async () => {
    let posts = 0
    const fetchImpl = vi.fn<ApiFetch>(async (url) => {
      if (url === '/sanctum/csrf-cookie') {
        return undefined
      }

      posts += 1

      if (posts === 1) {
        throw csrfError(419, 'CSRF token mismatch.')
      }

      return { ok: true }
    })
    const client = createApiClient({
      baseURL: 'http://localhost:8000',
      isClient: true,
      fetchImpl,
      readXsrfToken: () => 'token',
    })

    await expect(client.request('/api/bookings', { method: 'POST' })).resolves.toEqual({ ok: true })

    const urls = fetchImpl.mock.calls.map(call => call[0])

    expect(urls).toEqual([
      '/sanctum/csrf-cookie',
      '/api/bookings',
      '/sanctum/csrf-cookie',
      '/api/bookings',
    ])
  })

  it('throws ApiError 419 when the retry also fails', async () => {
    const fetchImpl = vi.fn<ApiFetch>(async (url) => {
      if (url === '/sanctum/csrf-cookie') {
        return undefined
      }

      throw csrfError(419, 'CSRF token mismatch.')
    })
    const client = createApiClient({
      baseURL: 'http://localhost:8000',
      isClient: true,
      fetchImpl,
      readXsrfToken: () => 'token',
    })

    await expect(client.request('/api/bookings', { method: 'POST' })).rejects.toMatchObject({
      name: 'ApiError',
      status: 419,
      message: 'CSRF token mismatch.',
    })

    const urls = fetchImpl.mock.calls.map(call => call[0])

    expect(urls).toEqual([
      '/sanctum/csrf-cookie',
      '/api/bookings',
      '/sanctum/csrf-cookie',
      '/api/bookings',
    ])
  })

  it('skips csrf and cookie reads on the server', async () => {
    const readXsrfToken = vi.fn(() => 'secret')
    const fetchImpl = vi.fn<ApiFetch>(async () => ({ ok: true }))
    const client = createApiClient({
      baseURL: 'http://localhost:8000',
      isClient: false,
      fetchImpl,
      readXsrfToken,
    })

    await client.request('/api/bookings', { method: 'POST' })

    expect(fetchImpl).toHaveBeenCalledTimes(1)
    expect(fetchImpl.mock.calls[0]?.[0]).toBe('/api/bookings')
    expect(readXsrfToken).not.toHaveBeenCalled()
    expect(header(fetchImpl.mock.calls[0]?.[1], 'X-XSRF-TOKEN')).toBeNull()
  })
})
