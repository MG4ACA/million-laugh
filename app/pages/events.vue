<script setup lang="ts">
import { upcoming, recent } from '~/data/site'
useHead({ title: 'Events | Million Laugh Entertainment' })
</script>
<template>
  <div>
    <PageHead chip="Events"><template #title>Come and see <span class="mark">our work.</span></template></PageHead>
    <section class="wrap section" style="padding-top:0">
      <h2 class="h2" style="font-size:clamp(26px,3vw,36px);margin-bottom:20px">Upcoming <span class="badge" style="vertical-align:middle">Demo dates</span></h2>
      <div class="stack"><div v-for="e in upcoming" :key="e.t" class="ev glass"><div class="date"><b>{{ e.day }}</b><small>{{ e.mon }}</small></div><div><div class="t">{{ e.t }}</div><div class="p">{{ e.p }}</div></div><NuxtLink to="/contact" class="link">Event details</NuxtLink></div></div>
    </section>
    <section class="wrap section" style="padding-top:0">
      <h2 class="h2" style="font-size:clamp(26px,3vw,36px);margin-bottom:20px">Recent events</h2>
      <div class="grid g2"><div v-for="e in recent" :key="e.t" class="glass" style="padding:26px 28px;border-radius:24px"><span class="eyebrow">{{ e.d }}</span><h3 class="h3" style="margin:8px 0">{{ e.t }}</h3><p class="body">{{ e.n }}</p><p class="body" style="margin-top:10px;font-weight:700;color:var(--teal)">{{ e.p }}</p></div></div>
    </section>
  </div>
</template>
