<script setup lang="ts">
import { services, steps } from '~/data/site'
useHead({ title: 'Services | Million Laugh Entertainment' })
const glassTints = ['glass--mint', 'glass--violet', 'glass--sky', 'glass--coral']
</script>
<template>
  <div>
    <PageHead chip="Services">
      <template #title>Everything an event needs, <span class="mark">under one roof.</span></template>
      We design the experience, build the venue and run the night. One team carries your idea from first concept to final applause.
    </PageHead>
    <section class="wrap section" style="padding-top:0">
      <div class="grid g2">
        <div v-for="(s, i) in services" :key="s.n" v-reveal="i" :class="['card', glassTints[i % glassTints.length]]">
          <div class="pic" style="aspect-ratio:16/9"><img :src="s.src" :alt="s.alt" loading="lazy"></div>
          <div class="tx"><span class="eyebrow" style="margin-top:20px">{{ s.n }}</span><h2 class="h3" style="font-size:24px">{{ s.t }}</h2><p class="body" style="margin:8px 0 14px">{{ s.d }}</p><NuxtLink to="/contact" class="link">Enquire about this →</NuxtLink></div>
        </div>
      </div>
    </section>
    <section class="section"><div class="wrap"><div class="dark" v-reveal>
      <span class="eyebrow">How we work</span><h2 class="h2">From first concept to final applause</h2>
      <div class="steps"><div v-for="(p, i) in steps" :key="p.n" v-reveal="i" class="step"><small>{{ p.n }}</small><h3>{{ p.t }}</h3><p>{{ p.d }}</p></div></div>
    </div></div></section>
  </div>
</template>
