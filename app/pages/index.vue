<script setup lang="ts">
import { stats, chapters, projects, services, venues, clients, upcoming, csr, gallery, contact } from '~/data/site'
useHead({ title: 'Million Laugh Entertainment | Making moments memorable' })
const featured = projects.find(p => p.featured)!
const homeWork = projects.filter(p => p.home).slice(0, 5)
const glassTints = ['glass--mint', 'glass--violet', 'glass--sky', 'glass--coral']
</script>
<template>
  <div>
    <div class="backdrop">
      <div class="blob a" aria-hidden="true" /><div class="blob b" aria-hidden="true" /><div class="blob c" aria-hidden="true" /><div class="blob d" aria-hidden="true" /><div class="blob e" aria-hidden="true" />
      <div class="rel">
        <SiteHeader />
        <section class="wrap hero">
          <div>
            <span class="chip hero-intro">Colombo, Sri Lanka · Event partner since 2008</span>
            <h1 class="h1"><span class="hero-line">Making</span><span class="hero-line">moments</span><span class="hero-line"><span class="mark hero-gradient">memorable</span></span></h1>
            <p class="lead hero-copy">Corporate events, sports, product launches and brand activations, planned and produced end to end by a team of 65.</p>
            <div class="hero-actions">
              <NuxtLink to="/contact" class="btn btn-amber">Plan your event</NuxtLink>
              <NuxtLink to="/work" class="btn btn-ghost"><span class="play"><svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5L12 7L3 12.5Z" fill="#fff"/></svg></span>See our work</NuxtLink>
            </div>
          </div>
          <div class="hero-pic">
            <div class="main"><img src="/images/lanka-t10-team.jpg" alt="Teams and officials on the ground at Lanka T10 Super League"></div>
            <div class="float f1"><b>65</b><small>people, one team</small></div>
            <div class="float f2"><b>Sports events · Lanka T10 Super League</b></div>
          </div>
        </section>
      </div>
    </div>

    <section class="wrap stats"><div class="glass stats-in"><div v-for="(s, i) in stats" :key="s.l" v-reveal="i" :class="['stat-item', glassTints[i % glassTints.length]]"><StatCounter :value="s.v" /><span>{{ s.l }}</span></div></div></section>

    <section class="wrap section">
      <span v-reveal class="eyebrow">What we do</span>
      <h2 v-reveal class="h2" style="margin:12px 0 14px">Events. Sports. Spaces.</h2>
      <p v-reveal class="lead" style="max-width:640px;margin-bottom:32px">We design the experience, build the venue and run the night. One team carries your idea from first concept to final applause.</p>
      <div class="grid g3">
        <NuxtLink v-for="(c, i) in chapters" :key="c.t" :to="c.to" :class="['card', glassTints[i % glassTints.length]]" v-reveal="i">
          <div class="pic" style="aspect-ratio:4/3"><img :src="c.src" :alt="c.alt" loading="lazy"></div>
          <div class="tx"><h3 class="h3" style="margin:20px 0 8px">{{ c.t }}</h3><p class="body" style="margin-bottom:14px">{{ c.d }}</p><span class="link">{{ c.link }} →</span></div>
        </NuxtLink>
      </div>
    </section>

    <section class="wrap section">
      <div v-reveal class="sec-head"><div><span class="eyebrow">Selected work</span><h2 class="h2">Our latest major engagements</h2></div><NuxtLink to="/work" class="link">All projects →</NuxtLink></div>
      <FeatureProject :p="featured" />
      <div class="grid g3"><ProjectCard v-for="p in homeWork" :key="p.slug" :p="p" /></div>
    </section>

    <section class="wrap section">
      <span v-reveal class="eyebrow">Services</span>
      <h2 v-reveal class="h2" style="margin:12px 0 28px;max-width:760px">Everything an event needs, under one roof</h2>
      <div class="svc-list"><NuxtLink v-for="(s, i) in services" :key="s.t" to="/services" :class="['svc', 'glass', glassTints[i % glassTints.length]]" v-reveal="i"><h3>{{ s.t }}</h3><p>{{ s.s }}</p><span class="link">Learn more →</span></NuxtLink></div>
    </section>

    <section class="wrap section">
      <span v-reveal class="eyebrow">Venues and assets</span>
      <h2 v-reveal class="h2" style="margin:12px 0 14px">We own what we build with</h2>
      <p v-reveal class="lead" style="max-width:640px;margin-bottom:32px">Two Sri Lankan firsts that give your event a venue and a floor nobody else can offer.</p>
      <div class="grid g2">
        <NuxtLink v-for="(v, i) in venues" :key="v.t" to="/venues" :class="['card', glassTints[i % glassTints.length]]" v-reveal="i">
          <div class="pic"><img :src="v.src" :alt="v.alt" loading="lazy"></div>
          <div class="tx"><span class="eyebrow">{{ v.tag }}</span><h3 class="h3">{{ v.t }}</h3><p class="body" style="margin-top:8px">{{ v.short }}</p></div>
        </NuxtLink>
      </div>
    </section>

    <section class="section">
      <div class="wrap"><div class="dark" v-reveal>
        <span class="eyebrow">Trusted by</span>
        <h2 class="h2">Brands that trust us with their biggest moments</h2>
        <div class="logos"><div v-for="c in clients" :key="c.name" class="logo-tile"><img :src="c.src" :alt="c.name" loading="lazy"></div></div>
      </div></div>
    </section>

    <section class="wrap section">
      <div v-reveal class="sec-head"><div><span class="eyebrow">Events</span><h2 class="h2">Come and see our work</h2></div><NuxtLink to="/events" class="link">All events →</NuxtLink></div>
      <div class="stack"><NuxtLink v-for="(e, i) in upcoming" :key="e.t" to="/events" :class="['ev', 'glass', glassTints[i % glassTints.length]]" v-reveal="i"><div class="date"><b>{{ e.day }}</b><small>{{ e.mon }}</small></div><div><div class="t">{{ e.t }}</div><div class="p">{{ e.p }}</div></div><span class="link">Event details →</span></NuxtLink></div>
      <p class="body" style="margin-top:12px"><span class="badge">Demo dates</span></p>
    </section>

    <section class="wrap section">
      <div class="split glass glass--sky" v-reveal style="padding:clamp(20px,4vw,48px)">
        <div class="photo"><img src="/images/lanka-t10-team.jpg" alt="The Million Laugh team"></div>
        <div>
          <span class="eyebrow">From the chairman</span>
          <blockquote class="quote">Success isn't measured by what we take but by what we give back.</blockquote>
          <p class="lead">We co-founded Million Laugh in 2008 to build a company where every team member, customer and partner feels like part of a greater family.</p>
          <p class="body" style="margin:18px 0"><strong style="color:var(--ink)">Srimal Wimalaratne</strong><br>Chairman and Co-Founder</p>
          <NuxtLink to="/about" class="link">Read the full message →</NuxtLink>
        </div>
      </div>
    </section>

    <section class="wrap section">
      <div class="split" style="align-items:start">
        <div>
          <div class="photo" style="margin-bottom:24px"><img src="/images/crowd.jpg" alt="Crowd at a live event" loading="lazy"></div>
          <span v-reveal class="eyebrow">Our team</span>
          <h2 v-reveal class="h2" style="margin:10px 0 12px">One team, one vision</h2>
          <p class="lead" style="margin-bottom:14px">We are a close-knit family bound by creativity and a drive to get every detail right. Every voice is heard, and hard work is balanced with laughter.</p>
          <NuxtLink to="/about" class="link">Meet the team →</NuxtLink>
        </div>
        <div>
          <span v-reveal class="eyebrow">Corporate social responsibility</span>
          <h2 v-reveal class="h2" style="margin:10px 0 12px">For people, for planet, for the future</h2>
          <p class="lead">We commit more than LKR 2 million every year to community and environmental work.</p>
          <div class="pills"><div v-for="(c, i) in csr" :key="c.t" :class="['pill-row', 'glass', glassTints[i % glassTints.length]]" v-reveal="i"><b>{{ c.t }}</b><span>{{ c.s }}</span></div></div>
          <NuxtLink to="/csr" class="link">Read about our CSR work →</NuxtLink>
        </div>
      </div>
    </section>

    <section class="wrap section">
      <div v-reveal class="sec-head"><div><span class="eyebrow">Gallery</span><h2 class="h2">Photos from the field</h2></div><NuxtLink to="/gallery" class="link">Open the gallery →</NuxtLink></div>
      <div class="mini"><div v-for="(g, i) in gallery.slice(0, 8)" :key="g.src" v-reveal="i" class="photo"><img :src="`/images/${g.src}.jpg`" :alt="g.alt" loading="lazy"></div></div>
    </section>

    <section class="wrap section">
      <div class="split" style="align-items:start">
        <div>
          <span v-reveal class="eyebrow">Contact</span>
          <h2 v-reveal class="h2" style="margin:12px 0 14px">Tell us about your event</h2>
          <p class="lead" style="margin-bottom:22px">Share the date, the guest count and the idea. We will reply with a plan and a quote.</p>
          <p class="body"><strong>Visit</strong><br>{{ contact.address }}<br><strong>Email</strong><br>{{ contact.email }}<br><strong>Call</strong><br>{{ contact.phone }}</p>
        </div>
        <ContactForm />
      </div>
    </section>
  </div>
</template>
