import { describe, expect, it } from 'vitest'
import { useDates } from '../../app/composables/useDates'

describe('useDates', () => {
  const { format, parseIso, toIso } = useDates()

  it('parses and formats ISO dates in UTC', () => {
    const date = parseIso('2027-11-07')

    expect(date.toISOString()).toBe('2027-11-07T00:00:00.000Z')
    expect(toIso(date)).toBe('2027-11-07')
    expect(format('2027-11-07', 'iso')).toBe('2027-11-07')
    expect(format('2027-11-07', 'short')).toBe('7 Nov 2027')
    expect(format('2027-11-07', 'shortPadded')).toBe('07 Nov 2027')
    expect(format('2027-11-07', 'long')).toBe('Sunday, November 7, 2027')
  })

  it('formats dateTime in UTC', () => {
    const date = new Date(Date.UTC(2026, 8, 18, 18, 22))

    expect(format(date, 'dateTime')).toBe('18 Sep 2026, 18:22')
  })

  it('renders an em dash for null and undefined', () => {
    expect(format(null)).toBe('—')
    expect(format(undefined)).toBe('—')
  })

  it('throws on malformed ISO', () => {
    expect(() => parseIso('07 Nov 2027')).toThrow(/Invalid ISO date/)
    expect(() => format('2027-13-40')).toThrow(/Invalid ISO date/)
    expect(() => format('not-a-date')).toThrow(/Invalid ISO date/)
  })
})
