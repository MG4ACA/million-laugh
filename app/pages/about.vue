<script setup lang="ts">
import { mission } from '~/data/site'
useHead({ title: 'About | Million Laugh Entertainment' })
const glassTints = ['glass--mint', 'glass--violet']
</script>
<template>
  <div>
    <PageHead chip="About us">
      <template #title>We turn ideas into <span class="mark">experiences</span> people remember.</template>
      Million Laugh Entertainment (Pvt) Ltd creates events, venues and brand experiences that reflect the corporate identity of our clients. We handle every aspect of your event, so you get all the credit for a flawless execution.
    </PageHead>
    <section class="wrap"><div v-reveal class="photo" style="aspect-ratio:16/8"><img src="/images/lanka-t10-team.jpg" alt="The Million Laugh team on the ground at a sports event" style="object-position:center 60%"></div></section>
    <section class="wrap section"><div class="grid g2"><div v-for="(m, i) in mission" :key="m.k" v-reveal="i" :class="['glass', glassTints[i % glassTints.length]]" style="padding:clamp(24px,3vw,40px)"><span class="eyebrow">{{ m.k }}</span><h2 class="h3" style="font-size:clamp(24px,2.6vw,32px);margin:12px 0">{{ m.t }}</h2><p class="body">{{ m.d }}</p></div></div></section>
    <section class="wrap section" style="padding-top:0"><div class="dark" v-reveal>
      <span class="eyebrow">The chairman's message</span>
      <h2 class="h2" style="max-width:860px">Success isn't measured by what we take but by what we give back.</h2>
      <p style="color:var(--dark-text);line-height:1.7;max-width:720px;margin-bottom:14px">We co-founded Million Laugh in 2008 to build a company where every team member, customer and partner feels like part of a greater family. Today we are 65 engineers, designers, tech leads and dreamers who pour their hearts into everything we create.</p>
      <p style="color:var(--dark-text);line-height:1.7;max-width:720px;margin-bottom:22px">For us, every project is personal. Your trust is not just a business transaction. It is a bond we cherish and a commitment we hold sacred.</p>
      <p><strong>Srimal Wimalaratne</strong><br><span style="color:var(--dark-text)">Chairman and Co-Founder</span></p>
    </div></section>
    <section class="wrap section" style="padding-top:0">
      <span v-reveal class="eyebrow">Our team</span><h2 v-reveal class="h2" style="margin:10px 0 14px">One team, one vision</h2>
      <p class="lead" style="max-width:680px">A close-knit family bound by creativity and a drive to get every detail right. Every voice is heard, and hard work is balanced with laughter.</p>
    </section>
  </div>
</template>
