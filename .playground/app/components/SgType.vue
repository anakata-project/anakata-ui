<script setup lang="ts">
type TypeRow = {
  meta: string
  kind: 'h1' | 'body' | 'mono' | 'label' | 'panel' | 'kpi' | 'manrope'
  sample: string
  manropeWeight?: 'normal' | 'medium' | 'semibold'
}

const rows: Array<TypeRow> = [
  { meta: 'h1 · Oswald 300 · 21px · .16em', kind: 'h1', sample: 'Bookings' },
  { meta: 'body · Archivo 300 · 13.5px / 1.6', kind: 'body', sample: 'Body text in Archivo on --ivory, for checking type and colour in both themes.' },
  { meta: '.mono · IBM Plex Mono · 10px · .2em', kind: 'mono', sample: 'Mono label' },
  { meta: '.label / AnkLabel · 9px · .2em · --iv62', kind: 'label', sample: 'Guest / client name' },
  { meta: 'panel title · Oswald 300 · 13px · .2em · --sand', kind: 'panel', sample: 'Incoming requests' },
  { meta: 'KPI value · Oswald 300 · 23px · .04em', kind: 'kpi', sample: 'USD 28,520' },
  { meta: 'Manrope 400 · engine', kind: 'manrope', sample: 'Manrope 400', manropeWeight: 'normal' },
  { meta: 'Manrope 500 · engine', kind: 'manrope', sample: 'Manrope 500', manropeWeight: 'medium' },
  { meta: 'Manrope 600 · engine', kind: 'manrope', sample: 'Manrope 600', manropeWeight: 'semibold' },
]
</script>

<template>
  <section class="sg-section">
    <AnkLabel class="sg-section__title">
      Type scale
    </AnkLabel>
    <div
      v-for="row in rows"
      :key="row.meta"
      class="sg-type-row"
    >
      <p class="label sg-type-row__meta">
        {{ row.meta }}
      </p>
      <h1 v-if="row.kind === 'h1'" class="sg-type-h1">
        {{ row.sample }}
      </h1>
      <p v-else-if="row.kind === 'body'" class="sg-type-body">
        {{ row.sample }}
      </p>
      <p v-else-if="row.kind === 'mono'" class="mono">
        {{ row.sample }}
      </p>
      <AnkLabel v-else-if="row.kind === 'label'">
        {{ row.sample }}
      </AnkLabel>
      <p v-else-if="row.kind === 'panel'" class="sg-type-panel">
        {{ row.sample }}
      </p>
      <p v-else-if="row.kind === 'kpi'" class="sg-type-kpi">
        {{ row.sample }}
      </p>
      <p
        v-else
        class="font-manrope"
        :class="{
          'font-normal': row.manropeWeight === 'normal',
          'font-medium': row.manropeWeight === 'medium',
          'font-semibold': row.manropeWeight === 'semibold',
        }"
      >
        {{ row.sample }}
      </p>
    </div>
  </section>
</template>
