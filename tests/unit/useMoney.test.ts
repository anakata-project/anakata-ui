import { describe, expect, it } from 'vitest'
import { useMoney } from '../../app/composables/useMoney'

describe('useMoney', () => {
  const { format, formatCents } = useMoney()

  it('formats whole usd with a thousands separator', () => {
    expect(format(28520)).toBe('USD 28,520')
    expect(format(26600)).toBe('USD 26,600')
  })

  it('formats cents as usd with two decimals', () => {
    expect(formatCents(2_852_000)).toBe('USD 28,520.00')
  })

  it('prefixes a minus for negative cents', () => {
    expect(formatCents(-2_852_000)).toBe('-USD 28,520.00')
  })

  it('throws on non-integers', () => {
    expect(() => format(28.52)).toThrow(/integer/)
    expect(() => formatCents(28.52)).toThrow(/integer/)
    expect(() => format(Number.NaN)).toThrow(/integer/)
  })
})
