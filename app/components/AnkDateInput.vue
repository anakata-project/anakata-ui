<script setup lang="ts">
import { calendarDateToIso, isoToCalendarDate } from '../utils/calendarDate'

const model = defineModel<string | null>({ default: null })

const props = withDefaults(defineProps<{
  size?: 'md' | 'sm'
  disabled?: boolean
  min?: string | null
  max?: string | null
  id?: string
  ariaLabel?: string
}>(), {
  size: 'md',
  disabled: false,
  min: null,
  max: null,
  id: undefined,
  ariaLabel: undefined,
})

const { t } = useI18n()
const open = ref(false)

const calendarValue = computed(() => isoToCalendarDate(model.value))
const minValue = computed(() => isoToCalendarDate(props.min))
const maxValue = computed(() => isoToCalendarDate(props.max))

function apply(value: unknown): void {
  if (value !== null && value !== undefined && (typeof value !== 'object' || !('toString' in value))) {
    return
  }

  const next = calendarDateToIso(value as { toString(): string } | null | undefined)
  const current = model.value === '' ? null : model.value

  if (next === current) {
    return
  }

  model.value = next
}

function onUpdate(value: unknown): void {
  apply(value)
}

async function onPick(value: unknown): Promise<void> {
  apply(value)
  await nextTick()
  open.value = false
}
</script>

<template>
  <UInputDate
    :id="id"
    :model-value="calendarValue"
    :size="size"
    :disabled="disabled"
    :min-value="minValue"
    :max-value="maxValue"
    :aria-label="ariaLabel"
    class="w-full"
    @update:model-value="onUpdate"
  >
    <template #trailing>
      <UPopover v-model:open="open">
        <UButton
          color="neutral"
          variant="link"
          :size="size === 'sm' ? 'xs' : 'sm'"
          icon="i-lucide-calendar"
          :aria-label="t('date.chooseAria')"
          :disabled="disabled"
          class="px-0"
        />
        <template #content>
          <UCalendar
            :model-value="calendarValue"
            :min-value="minValue"
            :max-value="maxValue"
            :disabled="disabled"
            class="p-2"
            @update:model-value="onPick"
          />
        </template>
      </UPopover>
    </template>
  </UInputDate>
</template>
