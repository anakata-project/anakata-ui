import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import AnkThemeToggle from '../../app/components/AnkThemeToggle.vue'

describe('AnkThemeToggle', () => {
  it('exposes an i18n aria-label', async () => {
    const wrapper = await mountSuspended(AnkThemeToggle)

    expect(wrapper.get('button').attributes('aria-label')).toBe('Toggle colour mode')
    expect(wrapper.text()).toMatch(/Light|Dark/)
  })
})
