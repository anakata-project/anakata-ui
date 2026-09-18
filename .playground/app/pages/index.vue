<script setup lang="ts">
const tokens: Array<string> = [
  '--forest',
  '--forest-950',
  '--forest-900',
  '--forest-700',
  '--forest-600',
  '--coral',
  '--coral-600',
  '--coral-400',
  '--ivory',
  '--iv62',
  '--iv38',
  '--sand',
  '--olive',
  '--hair',
  '--ok',
  '--warn',
]

const yachtOptions: Array<string> = [
  'ANAMARA',
  'ANATIVA',
]

const selectValue = ref('ANAMARA')
const selectMenuValue = ref('ANATIVA')
const inputValue = ref('')
const textareaValue = ref('')
const checked = ref(true)
const switched = ref(false)
const modalOpen = ref(false)
const slideoverOpen = ref(false)
const page = ref(2)

const toast = useToast()

const tabItems: Array<{ label: string, value: string }> = [
  { label: 'Overview', value: 'overview' },
  { label: 'Guests', value: 'guests' },
  { label: 'Extras', value: 'extras' },
  { label: 'Payments', value: 'payments' },
  { label: 'Documents', value: 'documents' },
  { label: 'History', value: 'history' },
]

type BookingRow = {
  ref: string
  guest: string
  departure: string
  status: string
}

const columns: Array<{ accessorKey: keyof BookingRow, header: string }> = [
  { accessorKey: 'ref', header: 'Ref' },
  { accessorKey: 'guest', header: 'Guest' },
  { accessorKey: 'departure', header: 'Departure' },
  { accessorKey: 'status', header: 'Status' },
]

const rows: Array<BookingRow> = [
  { ref: 'ANK-2026-0005', guest: 'Alvear', departure: '14 Nov 2027', status: 'CONFIRMED' },
  { ref: 'ANK-2026-0006', guest: 'Meridian', departure: '21 Nov 2027', status: 'HOLD' },
  { ref: 'ANK-2026-0007', guest: 'Virtuoso', departure: '28 Nov 2027', status: 'PENDING' },
]

const menuItems: Array<Array<{ label: string }>> = [
  [{ label: 'Open booking' }, { label: 'Duplicate' }],
  [{ label: 'Cancel' }],
]
</script>

<template>
  <div class="p-8 max-w-5xl">
    <div class="flex items-center justify-between gap-6 mb-8">
      <h1>Task 08 theme</h1>
      <UColorModeButton />
    </div>

    <p class="mb-3">
      Body text in Archivo on --ivory, for checking type and colour in both themes.
    </p>
    <p class="mono mb-8" style="color: var(--iv62)">
      Mono label
    </p>
    <p class="sr-only font-manrope font-normal">
      Manrope 400
    </p>
    <p class="sr-only font-manrope font-medium">
      Manrope 500
    </p>
    <p class="sr-only font-manrope font-semibold">
      Manrope 600
    </p>

    <section class="mb-10">
      <p class="label mb-3">
        Tokens
      </p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div
          v-for="token in tokens"
          :key="token"
          class="border border-(--hair) p-3"
        >
          <div
            class="h-12 mb-2"
            :style="{ background: `var(${token})` }"
          />
          <p class="label">
            {{ token }}
          </p>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <p class="label mb-3">
        UButton
      </p>
      <div class="flex flex-wrap items-center gap-3">
        <UButton>
          New booking
        </UButton>
        <UButton variant="outline">
          Cancel
        </UButton>
        <UButton disabled>
          Disabled
        </UButton>
        <UButton variant="outline" disabled>
          Disabled outline
        </UButton>
      </div>
    </section>

    <section class="mb-10">
      <p class="label mb-3">
        Fields md (.field)
      </p>
      <div class="grid gap-4 max-w-md">
        <UFormField label="Guest / client name">
          <UInput v-model="inputValue" placeholder="As on passport" />
        </UFormField>
        <UFormField label="Yacht">
          <USelect v-model="selectValue" :items="yachtOptions" />
        </UFormField>
        <UFormField label="Itinerary">
          <USelectMenu v-model="selectMenuValue" :items="yachtOptions" />
        </UFormField>
        <UFormField label="Internal notes">
          <UTextarea v-model="textareaValue" :rows="2" />
        </UFormField>
      </div>
    </section>

    <section class="mb-10">
      <p class="label mb-3">
        Fields sm (toolbar)
      </p>
      <div class="flex flex-wrap gap-3">
        <UInput size="sm" placeholder="2027-11-14" />
        <USelect v-model="selectValue" size="sm" :items="yachtOptions" />
      </div>
    </section>

    <section class="mb-10">
      <p class="label mb-3">
        UTable
      </p>
      <UTable :data="rows" :columns="columns" />
    </section>

    <section class="mb-10">
      <p class="label mb-3">
        UBadge
      </p>
      <div class="flex flex-wrap gap-2">
        <UBadge>Neutral</UBadge>
        <UBadge color="success">
          Confirmed
        </UBadge>
        <UBadge color="warning">
          Hold
        </UBadge>
        <UBadge color="info">
          Pending
        </UBadge>
        <UBadge color="primary">
          Overdue
        </UBadge>
      </div>
    </section>

    <section class="mb-10">
      <p class="label mb-3">
        UCard
      </p>
      <UCard>
        <template #header>
          <h3 class="font-display font-light text-[13px] tracking-[.2em] uppercase text-(--sand)">
            Bookings
          </h3>
        </template>
        List table and filters sit inside a panel.
      </UCard>
    </section>

    <section class="mb-10">
      <p class="label mb-3">
        UTabs
      </p>
      <UTabs :items="tabItems" />
    </section>

    <section class="mb-10">
      <p class="label mb-3">
        Overlay
      </p>
      <div class="flex flex-wrap gap-3">
        <UButton @click="modalOpen = true">
          Open modal
        </UButton>
        <UButton variant="outline" @click="slideoverOpen = true">
          Open slideover
        </UButton>
        <UButton variant="outline" @click="toast.add({ title: 'Saved', description: 'Booking history written.' })">
          Toast
        </UButton>
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
    </section>

    <section class="mb-10">
      <p class="label mb-3">
        UDropdownMenu / UTooltip
      </p>
      <div class="flex flex-wrap gap-3">
        <UDropdownMenu :items="menuItems">
          <UButton variant="outline">
            Actions
          </UButton>
        </UDropdownMenu>
        <UTooltip text="Release hold">
          <UButton variant="outline">
            Hover me
          </UButton>
        </UTooltip>
      </div>
    </section>

    <section class="mb-10">
      <p class="label mb-3">
        UCheckbox / USwitch
      </p>
      <div class="flex flex-col gap-3">
        <UCheckbox v-model="checked" label="Resident of Ecuador (national PNG rate)" />
        <USwitch v-model="switched" label="Offer the waitlist when full" />
      </div>
    </section>

    <section class="mb-10">
      <p class="label mb-3">
        UPagination
      </p>
      <UPagination v-model="page" :total="48" :items-per-page="10" />
    </section>
  </div>
</template>
