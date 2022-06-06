<script setup lang="ts">
</script>

<template>
  <div class="w-screen p-4">
    <div>
      <h1 class="text-xl font-bold text-center">
        <slot name="title" />
      </h1>
    </div>
    <hr class="my-2">
    <div>
      <slot name="contents" />
    </div>
    <div>
      <slot name="actions" />
    </div>

  </div>
</template>