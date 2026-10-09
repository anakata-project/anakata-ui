<script setup lang="ts">
defineProps<{
  label: string
  sub?: string
  /** Iconify name shown in a tile beside the figure, e.g. `i-lucide-calendar`. */
  icon?: string
}>()
</script>

<template>
  <div class="ank-kpi" :class="{ 'ank-kpi--icon': icon }">
    <span v-if="icon" class="ank-kpi__tile" aria-hidden="true">
      <UIcon :name="icon" class="ank-kpi__icon" />
    </span>
    <div class="ank-kpi__body">
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
  </div>
</template>

<style scoped>
.ank-kpi {
  background: var(--forest-900);
  padding: 18px 20px;
}

.ank-kpi--icon {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  border: 1px solid var(--hair);
}

.ank-kpi__tile {
  width: 40px;
  height: 40px;
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--iv62);
  background: var(--forest-700);
  border: 1px solid var(--hair);
}

.ank-kpi__icon {
  width: 18px;
  height: 18px;
}

.ank-kpi__body {
  min-width: 0;
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
  font-family: var(--font-bo-display, 'Oswald', sans-serif);
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

<!-- Unscoped on purpose: the scope is the .ank-backoffice class on <html>. -->
<style>
/* Back office: figures follow the design tokens. */
html.ank-backoffice .ank-kpi__label {
  font-size: var(--fs-2xs);
  letter-spacing: var(--tracking-label);
  margin-bottom: var(--space-1);
}

html.ank-backoffice .ank-kpi__value {
  font-weight: var(--weight-medium);
  font-size: var(--fs-xl);
  letter-spacing: .02em;
  line-height: 1.1;
}

html.ank-backoffice .ank-kpi__sub {
  font-size: var(--fs-xs);
  color: var(--text-faint);
  margin-top: var(--space-1);
}
</style>
