<script setup lang="ts">
const checked = ref(true)
const switched = ref(false)
</script>

<template>
  <section class="sg-section">
    <AnkLabel class="sg-section__title">
      UCheckbox / USwitch
    </AnkLabel>
    <div class="sg-states">
      <SgState label="Default">
        <UCheckbox v-model="checked" label="Resident of Ecuador (national PNG rate)" />
      </SgState>
      <SgState label="Disabled">
        <UCheckbox disabled label="Resident of Ecuador (national PNG rate)" />
      </SgState>
      <SgState label="Switch off">
        <USwitch v-model="switched" label="Offer the waitlist when full" />
      </SgState>
      <SgState label="Switch on">
        <USwitch :model-value="true" label="Offer the waitlist when full" />
      </SgState>
    </div>
  </section>
</template>
