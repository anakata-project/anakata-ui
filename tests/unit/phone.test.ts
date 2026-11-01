import { describe, expect, it } from 'vitest'
import en from '../../i18n/locales/en.json'
import {
  countryName,
  exampleNational,
  filterPhoneGroups,
  phoneIssue,
  phoneMenuGroups,
  toE164,
} from '../../app/utils/phone'

function sentence(iso: string, national: string): string | null {
  const issue = phoneIssue(iso, national)

  if (issue === null) {
    return null
  }

  const key = issue === 'too_short' ? 'tooShort' : issue === 'too_long' ? 'tooLong' : 'invalid'
  const template = en.phone[key]

  return template
    .replace('{country}', countryName(iso))
    .replace('{example}', exampleNational(iso))
}

describe('phone menu', () => {
  it('pins the United States, the United Kingdom, and Canada', () => {
    const [pinned, rest] = phoneMenuGroups()

    expect(pinned?.map(item => item.iso)).toEqual(['US', 'GB', 'CA'])
    expect(rest?.some(item => item.iso === 'US' || item.iso === 'GB' || item.iso === 'CA')).toBe(false)
    expect(pinned?.[0]?.face).toBe('US +1')
    expect(pinned?.[2]?.face).toBe('CA +1')
    expect(pinned?.[0]?.name).toBe('United States')
    expect(pinned?.[2]?.name).toBe('Canada')
  })

  it('searches by name, ISO, and dial code and keeps pin order', () => {
    const canada = filterPhoneGroups('canada')
    expect(canada).toHaveLength(1)
    expect(canada[0]?.map(item => item.iso)).toEqual(['CA'])

    const plusOne = filterPhoneGroups('+1')
    const pinned = plusOne[0]?.map(item => item.iso) ?? []
    expect(pinned.indexOf('US')).toBeGreaterThanOrEqual(0)
    expect(pinned.indexOf('CA')).toBeGreaterThan(pinned.indexOf('US'))
    expect(pinned).not.toContain('GB')

    const byDigit = filterPhoneGroups('1').flat().map(item => item.iso)
    expect(byDigit).toContain('US')
    expect(byDigit).toContain('CA')
  })
})

describe('toE164', () => {
  it('returns null for a blank number', () => {
    expect(toE164('US', ' ')).toBeNull()
    expect(phoneIssue('US', ' ')).toBeNull()
  })

  it('formats the United States, Canada, and Spain without spaces', () => {
    expect(toE164('US', '650 253 0000')).toBe('+16502530000')
    expect(toE164('CA', '416 555 0100')).toBe('+14165550100')
    expect(toE164('ES', ' 600 000 000 ')).toBe('+34600000000')
  })
})

describe('phone sentences', () => {
  it('names the country when the number is too short, too long, or invalid', () => {
    expect(phoneIssue('EC', '99 000')).toBe('too_short')
    expect(sentence('EC', '99 000')).toBe(`Ecuador number is too short. Example: ${exampleNational('EC')}.`)

    expect(phoneIssue('US', '6502530000123')).toBe('too_long')
    expect(sentence('US', '6502530000123')).toBe(`United States number is too long. Example: ${exampleNational('US')}.`)

    expect(phoneIssue('US', '0000000000')).toBe('invalid')
    expect(sentence('US', '0000000000')).toBe(`Enter a valid United States number. Example: ${exampleNational('US')}.`)
  })
})
