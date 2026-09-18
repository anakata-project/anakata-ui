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
</script>

<template>
  <div class="p-8 max-w-4xl">
    <div class="flex items-center justify-between gap-6 mb-8">
      <h1>Task 07 tokens</h1>
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

    <UButton class="mb-8">
      Button
    </UButton>

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
  </div>
</template>
