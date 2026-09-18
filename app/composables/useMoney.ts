function assertInteger(value: number, label: string): void {
  if (!Number.isInteger(value)) {
    throw new TypeError(`${label} must be an integer`)
  }
}

export function useMoney() {
  function format(usd: number): string {
    assertInteger(usd, 'usd')

    return `USD ${usd.toLocaleString('en-US')}`
  }

  function formatCents(cents: number): string {
    assertInteger(cents, 'cents')

    const sign = cents < 0 ? '-' : ''
    const absolute = Math.abs(cents)
    const dollars = Math.trunc(absolute / 100)
    const remainder = absolute % 100

    return `${sign}${format(dollars)}.${String(remainder).padStart(2, '0')}`
  }

  return {
    format,
    formatCents,
  }
}
