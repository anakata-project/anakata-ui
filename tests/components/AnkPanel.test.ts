import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import AnkPanel from '../../app/components/AnkPanel.vue'

describe('AnkPanel', () => {
  it('renders a title, actions and body', async () => {
    const wrapper = await mountSuspended(AnkPanel, {
      props: { title: 'Incoming requests' },
      slots: {
        default: () => 'Table body',
        actions: () => 'Admin',
      },
    })

    expect(wrapper.get('.ank-panel__title').text()).toBe('Incoming requests')
    expect(wrapper.get('.ank-panel__actions').text()).toBe('Admin')
    expect(wrapper.get('.ank-panel__body').text()).toBe('Table body')
  })

  it('omits the header when there is no title or actions', async () => {
    const wrapper = await mountSuspended(AnkPanel, {
      slots: { default: () => 'Only body' },
    })

    expect(wrapper.find('.ank-panel__header').exists()).toBe(false)
    expect(wrapper.get('.ank-panel__body').text()).toBe('Only body')
  })
})
