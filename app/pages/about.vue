<script setup lang="ts">
import { mission } from '~/data/site';
useHead({ title: 'About | Million Laugh Entertainment' });
const glassTints = ['glass--mint', 'glass--violet'];
</script>
<template>
  <div>
    <PageHead chip="About us">
      <template #title>
        We turn ideas into
        <span class="mark">experiences</span>
        people remember.
      </template>
      Million Laugh Entertainment (Pvt) Ltd creates events, venues and brand experiences that
      reflect the corporate identity of our clients. We handle every aspect of your event, so you
      get all the credit for a flawless execution.
    </PageHead>
    <section class="wrap">
      <div v-reveal class="photo" style="aspect-ratio: 16/8">
        <img
          src="/images/lanka-t10-team.jpg"
          alt="The Million Laugh team on the ground at a sports event"
          style="object-position: center 60%"
        />
      </div>
    </section>
    <section class="wrap section">
      <div class="grid g2">
        <div
          v-for="(m, i) in mission"
          :key="m.k"
          v-reveal="i"
          :class="['glass', glassTints[i % glassTints.length]]"
          style="padding: clamp(24px, 3vw, 40px)"
        >
          <span class="eyebrow">{{ m.k }}</span>
          <h2 class="h3" style="font-size: clamp(24px, 2.6vw, 32px); margin: 12px 0">{{ m.t }}</h2>
          <p class="body">{{ m.d }}</p>
        </div>
      </div>
    </section>
    <section class="wrap section" style="padding-top: 0">
      <div class="dark split chairman-message" v-reveal>
        <div class="photo">
          <img
            src="/images/chairman.jpeg"
            alt="Srimal Wimalaratne, Chairman and Co-Founder of Million Laugh"
          />
        </div>
        <div>
          <span class="eyebrow">The chairman's message</span>
          <h2 class="h2 quote" style="max-width: 860px">Welcome to Million Laugh Entertainment.</h2>
          <div class="chairman-copy">
            <p>
              It fills my heart with gratitude and joy to share our story with you—a story of
              passion, perseverance, and people.
            </p>
            <p>
              As a father to three energetic little boys and a devoted husband, my life revolves
              around love, connection, and family. When we co-founded this company in 2008, I
              dreamed of building something that embodied those same values—a place where every
              individual, whether a team member, a customer, or a partner, would feel like part of a
              greater family.
            </p>
            <p>
              Over the years, Million Laugh Entertainment has grown into something truly special.
              Today, we’re a team of 65 incredibly talented and passionate people—engineers,
              designers, tech leads, and dreamers—who pour their hearts into everything we create.
              We’re not just colleagues; we’re family. And this sense of unity is what drives our
              work, shapes our culture, and fuels our success.
            </p>
            <p>
              For us, every project is personal. Whether it’s designing a spectacular event,
              crafting a memorable experience, or delivering an innovative solution, we approach it
              with care, dedication, and a deep sense of responsibility. Your trust in us is not
              just a business transaction—it’s a bond we cherish and a commitment we hold sacred.
            </p>
            <p>
              I often tell my sons that success isn’t measured by what we take but by what we give
              back. This principle guides everything we do at Million Laugh Entertainment. Our
              mission is to not only deliver excellence but to inspire, uplift, and create moments
              that leave a lasting impact—on our clients, our community, and our world.
            </p>
            <p>
              To everyone who has been part of this journey—our team, our clients, our partners, and
              even those discovering us for the first time—thank you. Thank you for believing in us,
              for walking alongside us, and for allowing us to turn your dreams into reality.
            </p>
            <p>
              As we look to the future, our commitment remains the same: to lead with love, create
              with passion, and treat everyone we encounter as family. Because at the heart of
              Million Laugh Entertainment is a belief that together, we can do extraordinary things.
            </p>
            <p>With heartfelt gratitude,</p>
          </div>
          <p>
            <strong>Srimal Wimalaratne</strong>
            <br />
            <span style="color: var(--dark-text)">Chairman and Co-Founder</span>
          </p>
        </div>
      </div>
    </section>
    <section class="wrap section" style="padding-top: 0">
      <span v-reveal class="eyebrow">Our team</span>
      <h2 v-reveal class="h2" style="margin: 10px 0 14px">One team, one vision</h2>
      <p class="lead" style="max-width: 680px">
        A close-knit family bound by creativity and a drive to get every detail right. Every voice
        is heard, and hard work is balanced with laughter.
      </p>
    </section>
  </div>
</template>
