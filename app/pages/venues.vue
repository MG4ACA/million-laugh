<script setup lang="ts">
import { venues, projects } from '~/data/site'
useHead({ title: 'Venues and assets | Million Laugh Entertainment' })
const bia = projects.find(p => p.slug === 'bia-departure-expansion')!
</script>
<template>
  <div>
    <PageHead chip="Venues and assets">
      <template #title>We own what <span class="mark">we build with.</span></template>
      Two Sri Lankan firsts that give your event a venue and a floor nobody else can offer.
    </PageHead>
    <section class="wrap section" style="padding-top:0">
      <div v-for="(v, i) in venues" :key="v.t" class="feat-row" :class="{ rev: i % 2 }">
        <div class="photo"><img :src="v.src" :alt="v.alt"></div>
        <div>
          <span class="eyebrow">{{ v.tag }}</span>
          <h2 class="h2" style="margin:10px 0 14px;font-size:clamp(28px,3.4vw,44px)">{{ v.t }}</h2>
          <p class="lead">{{ v.d }}</p>
          <dl style="margin:22px 0"><div v-for="s in v.specs" :key="s.k" class="spec"><dt>{{ s.k }}</dt><dd>{{ s.v }}</dd></div></dl>
          <NuxtLink to="/contact" class="btn btn-amber">{{ v.cta }}</NuxtLink>
        </div>
      </div>
    </section>
    <section class="section"><div class="wrap"><div class="dark split">
      <div><span class="eyebrow">Built for others</span><h2 class="h2" style="margin-bottom:14px">{{ bia.t }}</h2><p style="color:var(--dark-text);line-height:1.65">{{ bia.long }}</p></div>
      <div class="photo"><img :src="bia.src" :alt="bia.alt"></div>
    </div></div></section>
  </div>
</template>
