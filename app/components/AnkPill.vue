<script setup lang="ts">
export type AnkPillTone = 'neutral' | 'ok' | 'warn' | 'coral' | 'sand'

withDefaults(defineProps<{
  tone?: AnkPillTone
}>(), {
  tone: 'neutral',
})
</script>

<template>
  <span class="ank-pill" :data-tone="tone">
    <slot />
  </span>
</template>

<style scoped>
.ank-pill {
  display: inline-block;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 8.5px;
  letter-spacing: .14em;
  text-transform: uppercase;
  padding: 3px 9px;
  border: 1px solid var(--hair);
}

.ank-pill[data-tone='ok'] {
  border-color: var(--ok);
  color: var(--ok);
}

.ank-pill[data-tone='warn'] {
  border-color: var(--warn);
  color: var(--warn);
}

.ank-pill[data-tone='coral'] {
  border-color: var(--coral);
  color: var(--coral);
}

.ank-pill[data-tone='sand'] {
  border-color: var(--sand);
  color: var(--sand);
}
</style>
