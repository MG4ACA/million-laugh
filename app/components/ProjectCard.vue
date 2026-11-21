<script setup lang="ts">
import type { Project } from '~/data/site'
defineProps<{ p: Project }>()
const tintByFilter: Record<string, string> = {
  Sports: 'glass--mint',
  Spaces: 'glass--sky',
  Corporate: 'glass--violet',
  Activations: 'glass--coral',
  Exhibitions: 'glass--amber'
}
</script>
<template>
  <NuxtLink :to="`/work/${p.slug}`" :class="['card', tintByFilter[p.filter] ?? 'glass--mint']" v-reveal>
    <div class="pic"><img :src="p.src" :alt="p.alt" loading="lazy"></div>
    <div class="tx"><span class="eyebrow">{{ p.cat }}</span><h3 class="h3">{{ p.t }}</h3><p class="body" style="margin-top:8px">{{ p.d }}</p></div>
  </NuxtLink>
</template>
