<script setup lang="ts">
import { projects, filters } from '~/data/site'
useHead({ title: 'Work | Million Laugh Entertainment' })
const active = ref('All')
const featured = projects.find(p => p.featured)!
const list = computed(() => projects.filter(p => !p.featured && (active.value === 'All' || p.filter === active.value)))
const showFeatured = computed(() => active.value === 'All' || featured.filter === active.value)
</script>
<template>
  <div>
    <PageHead chip="Work">
      <template #title>Moments we were <span class="mark">proud</span> to be part of.</template>
      <template #extra><div class="chips" style="margin-top:28px"><button v-for="f in filters" :key="f" :class="{ on: active === f }" @click="active = f">{{ f }}</button></div></template>
    </PageHead>
    <section class="wrap section" style="padding-top:0">
      <FeatureProject v-if="showFeatured" :p="featured" />
      <div class="grid g3"><ProjectCard v-for="p in list" :key="p.slug" :p="p" /></div>
    </section>
  </div>
</template>
