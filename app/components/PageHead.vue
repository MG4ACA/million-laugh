<script setup lang="ts">
defineProps<{ chip: string }>()
</script>
<template>
  <div class="backdrop">
    <div class="blob a" aria-hidden="true" /><div class="blob b" aria-hidden="true" />
    <div class="rel">
      <SiteHeader />
      <div class="wrap page-head">
        <span class="chip">{{ chip }}</span>
        <h1 class="h1"><slot name="title" /></h1>
        <p v-if="$slots.default" class="lead"><slot /></p>
        <slot name="extra" />
      </div>
    </div>
  </div>
</template>
