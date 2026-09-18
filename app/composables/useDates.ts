export type DateStyle = 'iso' | 'short' | 'shortPadded' | 'long' | 'dateTime'

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/
const SHORT_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const
const LONG_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const

function pad2(value: number): string {
  return String(value).padStart(2, '0')
}

export function useDates() {
  function parseIso(iso: string): Date {
    const match = ISO_DATE.exec(iso)

    if (!match) {
      throw new Error(`Invalid ISO date: ${iso}`)
    }

    const year = Number(match[1])
    const month = Number(match[2])
    const day = Number(match[3])
    const date = new Date(Date.UTC(year, month - 1, day))

    if (
      date.getUTCFullYear() !== year
      || date.getUTCMonth() !== month - 1
      || date.getUTCDate() !== day
    ) {
      throw new Error(`Invalid ISO date: ${iso}`)
    }

    return date
  }

  function toIso(date: Date): string {
    return date.toISOString().slice(0, 10)
  }

  function resolve(value: string | Date | null | undefined): Date | null {
    if (value === null || value === undefined) {
      return null
    }

    if (value instanceof Date) {
      if (Number.isNaN(value.getTime())) {
        throw new Error('Invalid date')
      }

      return value
    }

    return parseIso(value)
  }

  function format(value: string | Date | null | undefined, style: DateStyle = 'short'): string {
    const date = resolve(value)

    if (date === null) {
      return '—'
    }

    const year = date.getUTCFullYear()
    const month = date.getUTCMonth()
    const day = date.getUTCDate()

    if (style === 'iso') {
      return toIso(date)
    }

    if (style === 'short') {
      return `${day} ${SHORT_MONTHS[month]} ${year}`
    }

    if (style === 'shortPadded') {
      return `${pad2(day)} ${SHORT_MONTHS[month]} ${year}`
    }

    if (style === 'long') {
      return `${WEEKDAYS[date.getUTCDay()]}, ${LONG_MONTHS[month]} ${day}, ${year}`
    }

    return `${pad2(day)} ${SHORT_MONTHS[month]} ${year}, ${pad2(date.getUTCHours())}:${pad2(date.getUTCMinutes())}`
  }

  return {
    toIso,
    parseIso,
    format,
  }
}
