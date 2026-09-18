<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  caption: string
  position?: string
}>(), {
  position: 'top right',
})
</script>

<template>
  <div class="sg-compare">
    <div class="sg-compare__live">
      <p class="label sg-section__title">
        Live
      </p>
      <slot />
    </div>
    <figure class="sg-compare__ref">
      <p class="label sg-section__title">
        Reference
      </p>
      <div class="sg-compare__crop">
        <img :src="src" :alt="caption" :style="{ objectPosition: position }">
      </div>
      <figcaption>{{ caption }}</figcaption>
    </figure>
  </div>
</template>
