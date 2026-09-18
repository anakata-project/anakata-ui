<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="sg-state">
    <p class="label">
      {{ label }}
    </p>
    <slot />
  </div>
</template>
