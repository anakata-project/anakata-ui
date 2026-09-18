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
})
