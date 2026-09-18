<script setup lang="ts">
const colorMode = useColorMode()
const { t } = useI18n()

const label = computed(() => {
  return colorMode.value === 'dark' ? t('theme.toLight') : t('theme.toDark')
})

function toggle(): void {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <UButton
    color="neutral"
    variant="outline"
    class="ank-theme-toggle"
    :aria-label="t('theme.toggleAria')"
    @click="toggle"
  >
    {{ label }}
  </UButton>
</template>

<style scoped>
.ank-theme-toggle {
  padding: 9px 14px;
}
</style>
