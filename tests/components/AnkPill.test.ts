import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import AnkPill from '../../app/components/AnkPill.vue'

describe('AnkPill', () => {
  it('defaults to the neutral tone', async () => {
    const wrapper = await mountSuspended(AnkPill, {
      slots: { default: () => 'Active' },
    })

    expect(wrapper.text()).toBe('Active')
    expect(wrapper.attributes('data-tone')).toBe('neutral')
  })

  it('applies the requested tone', async () => {
    const wrapper = await mountSuspended(AnkPill, {
      props: { tone: 'ok' },
      slots: { default: () => 'Confirmed' },
    })

    expect(wrapper.attributes('data-tone')).toBe('ok')
  })
})
