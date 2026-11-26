<script setup lang="ts">
defineProps<{ chip: string }>()
</script>
<template>
  <div class="backdrop">
    <div class="rel">
      <SiteHeader />
      <div class="wrap page-head">
        <span v-reveal class="chip">{{ chip }}</span>
        <h1 v-reveal class="h1"><slot name="title" /></h1>
        <p v-if="$slots.default" v-reveal class="lead"><slot /></p>
        <slot name="extra" />
      </div>
    </div>
  </div>
</template>
