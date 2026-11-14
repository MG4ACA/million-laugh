<script setup lang="ts">
import type { Project } from '~/data/site'
defineProps<{ p: Project }>()
</script>
<template>
  <NuxtLink :to="`/work/${p.slug}`" class="card">
    <div class="pic"><img :src="p.src" :alt="p.alt" loading="lazy"></div>
    <div class="tx"><span class="eyebrow">{{ p.cat }}</span><h3 class="h3">{{ p.t }}</h3><p class="body" style="margin-top:8px">{{ p.d }}</p></div>
  </NuxtLink>
</template>
