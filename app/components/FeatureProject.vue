<script setup lang="ts">
import type { Project } from '~/data/site'
defineProps<{ p: Project }>()
</script>
<template>
  <NuxtLink :to="`/work/${p.slug}`" class="feature" v-reveal>
    <img :src="p.src" :alt="p.alt">
    <div class="over">
      <span class="tag">{{ p.cat }}</span>
      <h3 class="h3">{{ p.t }}</h3>
      <p class="body">{{ p.d }}</p>
      <span class="link" style="display:inline-block;margin-top:12px">Read the case study →</span>
    </div>
  </NuxtLink>
</template>
