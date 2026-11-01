<script setup lang="ts">
import {
  DEFAULT_PHONE_ISO,
  countryName,
  exampleNational,
  isPhoneIso,
  phoneIssue,
  phoneMenuGroups,
} from '../utils/phone'

const national = defineModel<string>({ default: '' })
const iso = defineModel<string>('iso', { default: '' })
const picked = defineModel<boolean>('picked', { default: false })

const props = withDefaults(defineProps<{
  id?: string
  placeholder?: string
  disabled?: boolean
  invalid?: boolean
  serverError?: string
}>(), {
  id: undefined,
  placeholder: '',
  disabled: false,
  invalid: false,
  serverError: '',
})

const { t } = useI18n()
const { request } = useApi()
const groups = phoneMenuGroups()
const filterFields: Array<string> = ['name', 'iso', 'dial']

if (iso.value === '') {
  iso.value = DEFAULT_PHONE_ISO
}

const message = computed(() => {
  if (props.serverError !== '') {
    return props.serverError
  }

  if (!props.invalid) {
    return ''
  }

  const issue = phoneIssue(iso.value, national.value)

  if (issue === null) {
    return ''
  }

  const key = issue === 'too_short' ? 'tooShort' : issue === 'too_long' ? 'tooLong' : 'invalid'

  return t(`phone.${key}`, {
    country: countryName(iso.value),
    example: exampleNational(iso.value),
  })
})

const controlUi = computed(() => {
  const ui: { base?: string, content: string, itemLabel: string } = {
    content: 'ank-phone-menu',
    itemLabel: 'ank-phone-item',
  }

  if (message.value !== '') {
    ui.base = 'ring-(--coral)'
  }

  return ui
})

function rowLabel(item: unknown): string {
  if (!item || typeof item !== 'object') {
    return ''
  }

  const row = item as { name?: string, dial?: string }

  return `${row.name ?? ''} ${row.dial ?? ''}`.trim()
}

function onIso(value: unknown): void {
  if (typeof value !== 'string' || !isPhoneIso(value) || value === iso.value) {
    return
  }

  picked.value = true
  iso.value = value
}

onMounted(async () => {
  if (picked.value) {
    return
  }

  try {
    const body = await request('/api/visitor-country') as { iso?: unknown }

    if (picked.value || !isPhoneIso(body.iso)) {
      return
    }

    iso.value = body.iso
  }
  catch {
    // Keep the country already shown. A failed lookup must not block the form.
  }
})
</script>

<template>
  <div
    class="ank-phone"
    :class="{ 'ank-phone--bad': message !== '' }"
  >
    <USelectMenu
      :model-value="iso"
      :items="groups"
      value-key="iso"
      label-key="face"
      :filter-fields="filterFields"
      :search-input="{ placeholder: t('phone.search') }"
      :disabled="disabled"
      :aria-label="t('phone.codeAria')"
      :ui="controlUi"
      class="ank-phone__code w-full"
      @update:model-value="onIso"
    >
      <template #item-label="{ item }">
        {{ rowLabel(item) }}
      </template>
    </USelectMenu>
    <UInput
      :id="id"
      v-model="national"
      type="tel"
      autocomplete="tel-national"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="message !== '' || undefined"
      :ui="controlUi"
      class="ank-phone__number w-full"
    />
    <p
      v-if="message !== ''"
      class="ank-phone__error"
    >
      {{ message }}
    </p>
  </div>
</template>

<style>
.ank-phone {
  display: grid;
  grid-template-columns: 7.5rem minmax(0, 1fr);
  gap: 8px;
  align-items: start;
}

.field .ank-phone input {
  width: 100%;
  border: 0;
  background: transparent;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  outline: none;
}

.ank-phone__code {
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.ank-phone__error {
  grid-column: 1 / -1;
  margin: 6px 0 0;
  color: var(--coral-400);
  font-size: 11px;
}

.ank-phone-menu {
  width: 20rem !important;
  min-width: 20rem !important;
}

.ank-phone-item {
  overflow: visible !important;
  text-overflow: clip !important;
  white-space: nowrap !important;
}
</style>
