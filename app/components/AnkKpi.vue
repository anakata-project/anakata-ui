<script setup lang="ts">
defineProps<{
  label: string
  sub?: string
}>()
</script>

<template>
  <div class="ank-kpi">
    <div class="ank-kpi__label">
      {{ label }}
    </div>
    <div class="ank-kpi__value">
      <slot />
    </div>
    <div v-if="sub || $slots.sub" class="ank-kpi__sub">
      <slot name="sub">
        {{ sub }}
      </slot>
    </div>
  </div>
</template>

<style scoped>
.ank-kpi {
  background: var(--forest-900);
  padding: 18px 20px;
}

.ank-kpi__label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 8.5px;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--iv38);
  margin-bottom: 8px;
}

.ank-kpi__value {
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  font-size: 23px;
  letter-spacing: .04em;
}

.ank-kpi__sub {
  font-size: 11px;
  color: var(--iv62);
  margin-top: 4px;
}
</style>
