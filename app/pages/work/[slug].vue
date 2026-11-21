<script setup lang="ts">
import { projects } from '~/data/site'
const route = useRoute()
const idx = projects.findIndex(p => p.slug === route.params.slug)
if (idx < 0) throw createError({ statusCode: 404, statusMessage: 'Project not found' })
const p = projects[idx]
const next = projects[(idx + 1) % projects.length]
const more = projects.filter(x => x.slug !== p.slug && !x.placeholder).slice(0, 3)
useHead({ title: `${p.t} | Million Laugh Entertainment` })
</script>
<template>
  <div>
    <PageHead chip="Case study">
      <template #title>{{ p.t }}</template>
      <template #extra>
        <NuxtLink to="/work" class="link" style="display:inline-block;margin-top:18px">← All work</NuxtLink>
        <div class="meta"><div v-for="(m, i) in p.meta" :key="m.k" v-reveal="i" :class="['glass', ['glass--mint', 'glass--violet', 'glass--sky', 'glass--coral'][i % 4]]"><span>{{ m.k }}</span><b>{{ m.v }}</b></div></div>
      </template>
    </PageHead>
    <section class="wrap"><div v-reveal class="photo" style="aspect-ratio:16/8"><img :src="p.src" :alt="p.alt"></div></section>
    <section class="wrap section"><p v-reveal class="lead" style="max-width:760px;font-size:clamp(18px,1.8vw,22px);color:var(--ink)">{{ p.long }}</p></section>
    <section v-if="more.length" class="wrap section" style="padding-top:0">
      <span v-reveal class="eyebrow">More work</span>
      <div class="grid g3" style="margin-top:20px"><ProjectCard v-for="m in more" :key="m.slug" :p="m" /></div>
    </section>
    <section class="wrap section" style="padding-top:0"><div v-reveal class="dark" style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:space-between">
      <div><span class="eyebrow">Next project</span><NuxtLink :to="`/work/${next.slug}`" class="h3" style="display:block;margin-top:8px">{{ next.t }} →</NuxtLink></div>
      <NuxtLink to="/contact" class="btn btn-amber">Plan a similar event</NuxtLink>
    </div></section>
  </div>
</template>
