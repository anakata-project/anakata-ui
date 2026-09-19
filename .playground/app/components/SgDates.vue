<script setup lang="ts">
const { format, zoneLabel } = useDates()

const instant = '2026-12-31T23:30:00Z'
const calendar = '2027-01-07'
</script>

<template>
  <section class="sg-section">
    <AnkLabel class="sg-section__title">
      Dates
    </AnkLabel>

    <div class="sg-type-row">
      <p class="label sg-type-row__meta">
        Instant · {{ instant }}
      </p>
      <p class="sg-type-body">
        {{ zoneLabel('UTC') }} — {{ format(instant, 'dateTime', { timeZone: 'UTC' }) }}
      </p>
      <p class="sg-type-body">
        {{ zoneLabel('Pacific/Galapagos') }} — {{ format(instant, 'dateTime', { timeZone: 'Pacific/Galapagos' }) }}
      </p>
    </div>

    <div class="sg-type-row">
      <p class="label sg-type-row__meta">
        Calendar date · {{ calendar }}
      </p>
      <p class="sg-type-body">
        {{ zoneLabel('UTC') }} — {{ format(calendar, 'short', { timeZone: 'UTC' }) }}
      </p>
      <p class="sg-type-body">
        {{ zoneLabel('Pacific/Galapagos') }} — {{ format(calendar, 'short', { timeZone: 'Pacific/Galapagos' }) }}
      </p>
    </div>
  </section>
</template>
