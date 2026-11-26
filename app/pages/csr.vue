<script setup lang="ts">
import { csr } from '~/data/site';
useHead({ title: 'CSR | Million Laugh Entertainment' });
const glassTints = ['glass--mint', 'glass--violet', 'glass--coral', 'glass--sky', 'glass--amber'];
</script>
<template>
  <div>
    <PageHead chip="Corporate social responsibility">
      <template #title>
        For people, for planet,
        <span class="mark">for the future.</span>
      </template>
      We believe success is measured not only by what we achieve in events, but by the positive
      impact we create in the lives of others and the world we share.
      <template #extra>
        <div class="glass glass--mint big-stat">
          <b>LKR 2M+</b>
          <span class="body">committed every year</span>
        </div>
      </template>
    </PageHead>
    <section class="wrap section" style="padding-top: 0">
      <div class="grid g3">
        <div
          v-for="(c, i) in csr"
          :key="c.n"
          v-reveal="i"
          :class="['card', glassTints[i % glassTints.length]]"
        >
          <div class="pic"><img :src="c.src" :alt="c.t" loading="lazy" /></div>
          <div class="tx">
            <span class="eyebrow">{{ c.n }}</span>
            <h2 class="h3">{{ c.t }}</h2>
            <p class="body" style="margin-top: 8px">{{ c.d }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="wrap section" style="padding-top: 0">
      <div v-reveal class="csr-manifesto">
        <p>
          At Million Laugh Entertainment, we firmly believe that success is measured not just by what we achieve in event management, corporate events, or business endeavors, but by the positive impact we create in the lives of others and the world we share. Guided by this ethos, we dedicate over 2 million Sri Lankan Rupees annually to various Corporate Social Responsibility (CSR) initiatives, striving to uplift communities while fostering sustainability and environmental stewardship. Our efforts include funding rural schools to provide children with quality education, supporting religious communities to promote harmony, and empowering university students through scholarships and mentorship programs. We also support religious institutions and communities to promote interfaith harmony, preserve cultural heritage, and foster spiritual wellbeing across all faiths. Additionally, we are committed to integrating environmentally friendly practices into our operations and projects, reducing waste, and promoting sustainable solutions. Beyond this, we actively assist people in times of need, offering emergency relief, supporting families during hardships, and aiding communities affected by disasters. For us, these initiatives are not just acts of charity but a profound responsibility to give back to the people and planet that inspire us every day. At Million Laugh Entertainment, we are dedicated to building a brighter, more sustainable, and inclusive future for all.
        </p>
      </div>
    </section>
    <section class="wrap section" style="padding-top: 0">
      <div
        v-reveal
        class="dark"
        style="
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          align-items: center;
          justify-content: space-between;
        "
      >
        <div>
          <h2 class="h2" style="margin-bottom: 10px">Want to partner with us?</h2>
          <p style="color: var(--dark-text)">
            If you run a programme we could support, we would like to hear from you.
          </p>
        </div>
        <NuxtLink to="/contact" class="btn btn-amber">Get in touch</NuxtLink>
      </div>
    </section>
  </div>
</template>
