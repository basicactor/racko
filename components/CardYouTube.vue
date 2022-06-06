<script setup lang="ts">

</script>

<template>
  <div class="card bg-stone-100 shadow-xl border-b-2 p-2">
    <figure>
      <slot name="thumbnail" />
    </figure>
    <div class="p-2">
      <div class="grid grid-flow-col grid-rows-2">
        <div class="row-span-2">
          <slot name="channelThumbnail" />
        </div>
        <p class="font-bold">
          <slot name="videoTitle" />
        </p>
        <div class="text-stone-500">
          <span class="text-sm">
            <slot name="channelTitle" />・
            <slot name="viewCount" />
          </span>
        </div>
      </div>
      <div>
        <slot name="contents" />
      </div>
      <div class="card-actions justify-end">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>