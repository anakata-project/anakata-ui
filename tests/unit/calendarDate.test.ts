import { CalendarDate } from '@internationalized/date'
import { describe, expect, it } from 'vitest'
import { calendarDateToIso, isoToCalendarDate } from '../../app/utils/calendarDate'

describe('calendarDate', () => {
  it('converts an ISO date into a calendar date', () => {
    const date = isoToCalendarDate('2027-11-07')

    expect(date).toBeInstanceOf(CalendarDate)
    expect(date?.year).toBe(2027)
    expect(date?.month).toBe(11)
    expect(date?.day).toBe(7)
  })

  it('returns undefined for an empty or invalid date', () => {
    expect(isoToCalendarDate(null)).toBeUndefined()
    expect(isoToCalendarDate('')).toBeUndefined()
    expect(isoToCalendarDate('07/11/2027')).toBeUndefined()
    expect(isoToCalendarDate('2027-02-31')).toBeUndefined()
  })

  it('converts a calendar date back to an ISO string', () => {
    expect(calendarDateToIso(new CalendarDate(2027, 11, 7))).toBe('2027-11-07')
    expect(calendarDateToIso(null)).toBeNull()
    expect(calendarDateToIso(undefined)).toBeNull()
  })

  it('round-trips an ISO date', () => {
    expect(calendarDateToIso(isoToCalendarDate('2026-01-04'))).toBe('2026-01-04')
  })
})