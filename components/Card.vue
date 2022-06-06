<script setup lang="ts">
const { side } = defineProps<{
  side?: boolean
}>()
</script>

<template>
  <div class="card bg-stone-100 shadow-xl" :class="{ 'card-side': side }">
    <figure>
      <slot name="img" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <slot name=title />
      </h2>
      <p>
        <slot name="contents" />
      </p>
      <div class="card-actions justify-end">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>