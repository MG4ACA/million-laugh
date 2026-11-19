<script setup lang="ts">
import { nav } from '~/data/site'
const open = ref(false)
const route = useRoute()
const scrolled = useScrolled()
watch(() => route.fullPath, () => (open.value = false))
</script>
<template>
  <header class="hdr">
    <div class="hdr-bar" :class="{ 'is-scrolled': scrolled }">
      <NuxtLink to="/" class="logo" aria-label="Million Laugh Entertainment, home"><img src="/images/logo.png" alt="Million Laugh Entertainment (Pvt) Ltd"></NuxtLink>
      <nav class="nav" aria-label="Main">
        <NuxtLink v-for="l in nav" :key="l.to" :to="l.to" class="nl">{{ l.label }}</NuxtLink>
        <NuxtLink to="/contact" class="btn btn-amber">Plan your event</NuxtLink>
      </nav>
      <button class="burger" type="button" :aria-expanded="open" aria-label="Toggle menu" @click="open = !open">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path v-if="!open" d="M3 8h18M3 16h18"/><path v-else d="M5 5l14 14M19 5L5 19"/></svg>
      </button>
    </div>
    <nav v-if="open" class="drawer" aria-label="Mobile">
      <NuxtLink v-for="l in nav" :key="l.to" :to="l.to">{{ l.label }}</NuxtLink>
      <NuxtLink to="/contact" class="btn btn-amber">Plan your event</NuxtLink>
    </nav>
  </header>
</template>
