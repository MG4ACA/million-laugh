<script setup lang="ts">
import { gallery } from '~/data/site'
useHead({ title: 'Gallery | Million Laugh Entertainment' })
const cats = ['All', 'Sports', 'Corporate', 'Spaces', 'Activations']
const active = ref('All')
const items = computed(() => gallery.filter(g => active.value === 'All' || g.cat === active.value).map(g => ({ src: `/images/${g.src}.jpg`, alt: g.alt })))
const open = ref<number | null>(null)
</script>
<template>
  <div>
    <PageHead chip="Gallery">
      <template #title>Photos <span class="mark">from the field.</span></template>
      <template #extra><div class="chips" style="margin-top:28px"><button v-for="c in cats" :key="c" :class="{ on: active === c }" @click="active = c">{{ c }}</button></div></template>
    </PageHead>
    <section class="wrap section" style="padding-top:0">
      <div class="mosaic"><button v-for="(g, i) in items" :key="g.src" v-reveal="i" type="button" :aria-label="`Open photo: ${g.alt}`" @click="open = i"><img :src="g.src" :alt="g.alt" loading="lazy"></button></div>
    </section>
    <LightBox :items="items" :index="open" @close="open = null" @go="open = $event" />
  </div>
</template>
