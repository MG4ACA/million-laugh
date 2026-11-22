<script setup lang="ts">
import { footerCols, contact } from '~/data/site'
</script>
<template>
  <footer class="ftr">
    <div class="ftr-in">
      <div v-reveal class="ftr-cta">
        <p>Let's make your next moment memorable.</p>
        <NuxtLink to="/contact" class="btn btn-amber">Plan your event →</NuxtLink>
      </div>
      <div class="ftr-cols">
        <div class="ftr-brand">
          <div class="logo"><img src="/images/logo.png" alt="Million Laugh Entertainment (Pvt) Ltd"></div>
          <p>Making moments memorable since 2008.<br>{{ contact.address }}<br>{{ contact.phone }}<br>{{ contact.email }}</p>
        </div>
        <div class="ftr-links">
          <div v-for="c in footerCols" :key="c.title">
            <span>{{ c.title }}</span>
            <template v-for="i in c.items" :key="i.label">
              <a
                v-if="i.to.startsWith('https://')"
                :href="i.to"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ i.label }}
              </a>
              <NuxtLink v-else :to="i.to">{{ i.label }}</NuxtLink>
            </template>
          </div>
        </div>
      </div>
      <p class="ftr-copy">© 2026 Million Laugh Entertainment (Pvt) Ltd. All rights reserved. Prototype for proposal.</p>
    </div>
  </footer>
</template>
