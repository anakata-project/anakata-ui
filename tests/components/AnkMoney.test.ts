import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import AnkMoney from '../../app/components/AnkMoney.vue'

describe('AnkMoney', () => {
  it('formats an integer usd amount', async () => {
    const wrapper = await mountSuspended(AnkMoney, {
      props: { amount: 28520 },
    })

    expect(wrapper.text()).toBe('USD 28,520')
  })

  it('formats cents', async () => {
    const wrapper = await mountSuspended(AnkMoney, {
      props: { cents: 2_852_000 },
    })

    expect(wrapper.text()).toBe('USD 28,520.00')
  })
})
