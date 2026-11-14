<script setup lang="ts">
import { contact } from '~/data/site'
useHead({ title: 'Contact | Million Laugh Entertainment' })
const info = [{ k: 'Visit', v: contact.address }, { k: 'Email', v: contact.email }, { k: 'Call', v: contact.phone }, { k: 'WhatsApp', v: contact.whatsapp }]
</script>
<template>
  <div>
    <div class="backdrop">
      <div class="blob a" aria-hidden="true" /><div class="blob b" aria-hidden="true" />
      <div class="rel">
        <SiteHeader />
        <section class="wrap page-head" style="display:flex;flex-wrap:wrap;gap:40px clamp(32px,5vw,72px);align-items:flex-start">
          <div style="flex:1 1 340px;max-width:460px">
            <span class="chip">Contact</span>
            <h1 class="h1" style="font-size:clamp(40px,5.4vw,68px)">Tell us about <span class="mark">your event.</span></h1>
            <p class="lead" style="margin-bottom:26px">Share the date, the guest count and the idea. We will reply with a plan and a quote.</p>
            <div class="stack" style="gap:10px"><div v-for="i in info" :key="i.k" class="info glass"><span>{{ i.k }}</span><b>{{ i.v }}</b></div></div>
            <div class="mapbox" style="margin-top:18px">Map placeholder · {{ contact.address }}</div>
          </div>
          <div style="flex:2 1 460px;min-width:0"><ContactForm full /></div>
        </section>
      </div>
    </div>
  </div>
</template>
