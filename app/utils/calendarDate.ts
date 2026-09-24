import { parseDate, type CalendarDate } from '@internationalized/date'

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/

export function isoToCalendarDate(value: string | null | undefined): CalendarDate | undefined {
  if (value === null || value === undefined || value === '') {
    return undefined
  }

  if (!ISO_DATE.test(value)) {
    return undefined
  }

  try {
    return parseDate(value)
  }
  catch {
    return undefined
  }
}

export function calendarDateToIso(value: { toString(): string } | null | undefined): string | null {
  if (value === null || value === undefined) {
    return null
  }

  const iso = value.toString()

  return ISO_DATE.test(iso) ? iso : null
}
