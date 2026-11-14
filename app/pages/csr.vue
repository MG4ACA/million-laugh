<script setup lang="ts">
import { csr } from '~/data/site'
useHead({ title: 'CSR | Million Laugh Entertainment' })
</script>
<template>
  <div>
    <PageHead chip="Corporate social responsibility">
      <template #title>For people, for planet, <span class="mark">for the future.</span></template>
      We believe success is measured not only by what we achieve in events, but by the positive impact we create in the lives of others and the world we share.
      <template #extra><div class="glass big-stat"><b>LKR 2M+</b><span class="body">committed every year</span></div></template>
    </PageHead>
    <section class="wrap section" style="padding-top:0">
      <div class="grid g3"><div v-for="c in csr" :key="c.n" class="card"><div class="pic"><img :src="c.src" :alt="c.t" loading="lazy"></div><div class="tx"><span class="eyebrow">{{ c.n }}</span><h2 class="h3">{{ c.t }}</h2><p class="body" style="margin-top:8px">{{ c.d }}</p></div></div></div>
    </section>
    <section class="wrap section" style="padding-top:0"><div class="dark" style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:space-between"><div><h2 class="h2" style="margin-bottom:10px">Want to partner with us?</h2><p style="color:var(--dark-text)">If you run a programme we could support, we would like to hear from you.</p></div><NuxtLink to="/contact" class="btn btn-amber">Get in touch</NuxtLink></div></section>
  </div>
</template>
