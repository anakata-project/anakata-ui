<script setup lang="ts">
const modalOpen = ref(false)
const slideoverOpen = ref(false)
const toast = useToast()

const menuItems: Array<Array<{ label: string }>> = [
  [{ label: 'Open booking' }, { label: 'Duplicate' }],
  [{ label: 'Cancel' }],
]
</script>

<template>
  <section class="sg-section">
    <AnkLabel class="sg-section__title">
      Overlay
    </AnkLabel>
    <div class="sg-states">
      <SgState label="Default">
        <UButton @click="modalOpen = true">
          Open modal
        </UButton>
      </SgState>
      <SgState label="Slideover">
        <UButton variant="outline" @click="slideoverOpen = true">
          Open slideover
        </UButton>
      </SgState>
      <SgState label="Toast">
        <UButton variant="outline" @click="toast.add({ title: 'Saved', description: 'Booking history written.' })">
          Toast
        </UButton>
      </SgState>
    </div>
    <UModal v-model:open="modalOpen" title="New booking">
      <template #body>
        <UFormField label="Guest / client name" class="mb-4">
          <UInput placeholder="As on passport" />
        </UFormField>
        <UButton @click="modalOpen = false">
          Create
        </UButton>
      </template>
    </UModal>
    <USlideover v-model:open="slideoverOpen" title="ANK-2026-0005">
      <template #body>
        Booking drawer. Overlay, width and padding from #drawer.
      </template>
    </USlideover>
    <p class="sg-type-body" style="margin: 16px 0 0">
      No prototype screenshot shows a modal. Compare the slideover to the booking drawer.
    </p>
    <SgCompare
      src="/reference/14-booking-overview.png"
      caption="14-booking-overview.png · booking drawer"
      position="100% 20%"
    >
      <UButton variant="outline" @click="slideoverOpen = true">
        Open slideover
      </UButton>
    </SgCompare>
    <SgCompare
      src="/reference/14-booking-overview.png"
      caption="14-booking-overview.png · outline actions"
      position="82% 42%"
    >
      <div class="sg-states">
        <UButton variant="outline">
          Onboard
        </UButton>
        <UButton variant="outline">
          Cancelled post paid
        </UButton>
      </div>
    </SgCompare>

    <AnkLabel class="sg-section__title" style="display: block; margin-top: 28px">
      UDropdownMenu / UTooltip
    </AnkLabel>
    <div class="sg-states">
      <SgState label="Default">
        <UDropdownMenu :items="menuItems">
          <UButton variant="outline">
            Actions
          </UButton>
        </UDropdownMenu>
      </SgState>
      <SgState label="Hover">
        <UTooltip text="Release hold">
          <UButton variant="outline">
            Hover me
          </UButton>
        </UTooltip>
      </SgState>
    </div>
  </section>
</template>
