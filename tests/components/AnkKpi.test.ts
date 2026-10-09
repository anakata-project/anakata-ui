import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import AnkKpi from '../../app/components/AnkKpi.vue'

describe('AnkKpi', () => {
  it('renders the label, value and sub-line', async () => {
    const wrapper = await mountSuspended(AnkKpi, {
      props: {
        label: 'Collected to date',
        sub: 'deposits + balances, all channels',
      },
      slots: { default: () => 'USD 28,520' },
    })

    expect(wrapper.get('.ank-kpi__label').text()).toBe('Collected to date')
    expect(wrapper.get('.ank-kpi__value').text()).toBe('USD 28,520')
    expect(wrapper.get('.ank-kpi__sub').text()).toBe('deposits + balances, all channels')
  })

  it('renders an icon tile only when an icon is given', async () => {
    const plain = await mountSuspended(AnkKpi, {
      props: { label: 'Sold' },
      slots: { default: () => '95' },
    })
    const withIcon = await mountSuspended(AnkKpi, {
      props: { label: 'Sold', icon: 'i-lucide-check' },
      slots: { default: () => '95' },
    })

    expect(plain.find('.ank-kpi__tile').exists()).toBe(false)
    expect(withIcon.find('.ank-kpi__tile').exists()).toBe(true)
    expect(withIcon.classes()).toContain('ank-kpi--icon')
  })
})
