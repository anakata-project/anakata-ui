import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import AnkLabel from '../../app/components/AnkLabel.vue'

describe('AnkLabel', () => {
  it('renders the default slot with the label class', async () => {
    const wrapper = await mountSuspended(AnkLabel, {
      slots: { default: () => 'Guest / client name' },
    })

    expect(wrapper.text()).toBe('Guest / client name')
    expect(wrapper.classes()).toContain('label')
  })
})
