<script setup lang="ts">
const props = defineProps<{
  amount?: number
  cents?: number
}>()

const { format, formatCents } = useMoney()

const text = computed(() => {
  if (props.cents !== undefined) {
    return formatCents(props.cents)
  }

  if (props.amount !== undefined) {
    return format(props.amount)
  }

  throw new Error('AnkMoney requires amount or cents')
})
</script>

<template>
  <span>{{ text }}</span>
</template>
