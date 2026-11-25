<script setup lang="ts">
import {
  chapters,
  clients,
  contact,
  csr,
  gallery,
  projects,
  services,
  stats,
  upcoming,
  venues,
} from '~/data/site';
useHead({ title: 'Million Laugh Entertainment | Making moments memorable' });
const featured = projects.find((p) => p.featured)!;
const homeWork = projects.filter((p) => p.home).slice(0, 5);
const glassTints = ['glass--mint', 'glass--amber'];
const activeCsrIndex = ref(0);
const isCsrHovered = ref(false);
const isCsrFocused = ref(false);
const defaultHeroBackground = '/images/michael-jackson-event.jpeg';
const autoHeroBackground = ref(defaultHeroBackground);
const hoveredHeroBackground = ref<string | null>(null);
const activeHeroBackground = computed(
  () => hoveredHeroBackground.value ?? autoHeroBackground.value,
);
const heroGallery = ref<HTMLElement | null>(null);
const canScrollHeroGalleryPrevious = ref(false);
const canScrollHeroGalleryNext = ref(false);
const heroTrackOffset = ref(0);
const isHeroTrackMoving = ref(false);
const isHeroTrackResetting = ref(false);
let heroRotationTimer: number | undefined;
let heroTrackTimer: number | undefined;
let csrRotationTimer: number | undefined;
onMounted(() => {
  void nextTick(updateHeroGalleryControls);
  window.addEventListener('resize', updateHeroGalleryControls);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  heroRotationTimer = window.setInterval(advanceHeroCarousel, 5500);
  csrRotationTimer = window.setInterval(advanceCsrAccordion, 5000);
});
onBeforeUnmount(() => {
  if (heroRotationTimer !== undefined) window.clearInterval(heroRotationTimer);
  if (heroTrackTimer !== undefined) window.clearTimeout(heroTrackTimer);
  if (csrRotationTimer !== undefined) window.clearInterval(csrRotationTimer);
  window.removeEventListener('resize', updateHeroGalleryControls);
});
function advanceCsrAccordion() {
  if (!csr.length || isCsrHovered.value || isCsrFocused.value) return;
  activeCsrIndex.value = (activeCsrIndex.value + 1) % csr.length;
}
function resumeCsrRotationOnFocusLeave(event: FocusEvent) {
  const accordion = event.currentTarget;
  if (
    accordion instanceof HTMLElement &&
    !(event.relatedTarget instanceof Node && accordion.contains(event.relatedTarget))
  ) {
    isCsrFocused.value = false;
  }
}
function updateHeroGalleryControls() {
  const gallery = heroGallery.value;
  if (!gallery) return;
  canScrollHeroGalleryPrevious.value = gallery.scrollLeft > 1;
  canScrollHeroGalleryNext.value =
    gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth - 1;
}
function scrollHeroGallery(direction: -1 | 1) {
  const gallery = heroGallery.value;
  const firstCard = gallery?.querySelector<HTMLElement>('.hero-card');
  const track = gallery?.querySelector<HTMLElement>('.hero-gallery-track');
  if (!gallery || !firstCard || !track) return;
  const gap = Number.parseFloat(window.getComputedStyle(track).gap) || 0;
  gallery.scrollBy({
    left: direction * (firstCard.getBoundingClientRect().width + gap),
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
  });
}
function clearHeroBackgroundOnFocusLeave(event: FocusEvent) {
  const gallery = event.currentTarget;
  if (
    gallery instanceof HTMLElement &&
    !(event.relatedTarget instanceof Node && gallery.contains(event.relatedTarget))
  ) {
    hoveredHeroBackground.value = null;
  }
}
const heroCards = [
  {
    eyebrow: 'Live entertainment',
    title: 'Michael Jackson Tribute Event',
    src: '/images/michael-jackson-event.jpeg',
    alt: 'Michael Jackson tribute performance at a live event',
    to: '/work',
  },
  {
    eyebrow: 'Opening ceremonies',
    title: 'LPL 2026 Opening Ceremony',
    src: '/images/lpl-2026-open-ceromony.jpg',
    alt: 'Aerial view of the LPL 2026 Opening Ceremony at SSC Grounds',
    to: '/work/lpl-2026-opening-ceremony',
  },
  {
    eyebrow: 'Corporate awards',
    title: 'SLIM National Sales Awards 2025',
    src: '/images/slim-national-sales-awards.jpeg',
    alt: 'SLIM National Sales Awards 2025 Guardians of Growth ceremony stage',
    to: '/work',
  },
  {
    eyebrow: 'Festivals',
    title: 'Yaga Festival',
    src: '/images/yaga-festival.jpeg',
    alt: 'Yaga Festival live music and performances at Port City',
    to: '/events',
  },
  {
    eyebrow: 'Sports events',
    title: 'T10 Player Draft',
    src: '/images/t10-player-draft.jpg',
    alt: 'Players at the T10 Player Draft',
    to: '/work/lanka-t10-super-league',
  },
  {
    eyebrow: 'Exhibitions',
    title: 'National AI Expo',
    src: '/images/national-ai-expo.jpg',
    alt: 'Exhibition hall at the National AI Expo',
    to: '/work',
  },
  {
    eyebrow: 'Live productions',
    title: 'Delmege Event',
    src: '/images/delmege-event.jpg',
    alt: 'Stage and audience at the Delmege corporate event',
    to: '/work',
  },
  {
    eyebrow: 'Awards ceremonies',
    title: 'National Sales Awards',
    src: '/images/national-sales-awards.jpg',
    alt: 'Stage at the National Sales Awards ceremony',
    to: '/work',
  },
  {
    eyebrow: 'Brand experiences',
    title: 'SLIM Brands Excellence',
    src: '/images/slim-brands-excellence.jpg',
    alt: 'SLIM Brands Excellence awards evening',
    to: '/work',
  },
];
const displayedHeroCards = ref([...heroCards]);
function advanceHeroCarousel() {
  const gallery = heroGallery.value;
  const track = gallery?.querySelector<HTMLElement>('.hero-gallery-track');
  const firstCard = track?.querySelector<HTMLElement>('.hero-card');
  const cards = displayedHeroCards.value;
  if (hoveredHeroBackground.value || !gallery || !track || !firstCard || cards.length < 2) return;

  const galleryLeft = gallery.getBoundingClientRect().left + gallery.clientLeft;
  const cardElements = Array.from(track.querySelectorAll<HTMLElement>('.hero-card'));
  const firstVisibleIndex = cardElements.findIndex(
    (card) => card.getBoundingClientRect().right > galleryLeft,
  );
  const nextIndex = ((firstVisibleIndex < 0 ? 0 : firstVisibleIndex) + 1) % cards.length;
  const nextCard = cards[nextIndex];
  if (!nextCard) return;
  autoHeroBackground.value = nextCard.src;

  const gap = Number.parseFloat(window.getComputedStyle(track).gap) || 0;
  const shift = firstCard.getBoundingClientRect().width + gap;
  isHeroTrackMoving.value = true;
  void nextTick(() => {
    void track.offsetWidth;
    heroTrackOffset.value = -shift;
    heroTrackTimer = window.setTimeout(() => {
      const scrollLeft = gallery.scrollLeft;
      const [first, ...rest] = displayedHeroCards.value;
      if (first) displayedHeroCards.value = [...rest, first];
      isHeroTrackMoving.value = false;
      isHeroTrackResetting.value = true;
      heroTrackOffset.value = 0;
      void nextTick(() => {
        gallery.scrollLeft = scrollLeft;
        isHeroTrackResetting.value = false;
        updateHeroGalleryControls();
      });
    }, 720);
  });
}
</script>
<template>
  <div>
    <div class="backdrop home-hero-shell">
      <div class="blob a" aria-hidden="true" />
      <div class="blob b" aria-hidden="true" />
      <div class="blob c" aria-hidden="true" />
      <div class="blob d" aria-hidden="true" />
      <div class="blob e" aria-hidden="true" />
      <Transition name="hero-background">
        <img
          v-if="activeHeroBackground !== defaultHeroBackground"
          :key="activeHeroBackground"
          class="hero-background-swap"
          :src="activeHeroBackground"
          alt=""
          aria-hidden="true"
        />
      </Transition>
      <div class="rel">
        <SiteHeader />
        <section class="hero hero--immersive">
          <div class="hero-content">
            <span class="chip hero-intro">Colombo, Sri Lanka · Event partner since 2008</span>
            <h1 class="h1">
              <span class="hero-line">Making</span>
              <span class="hero-line">moments</span>
              <span class="hero-line"><span class="mark hero-gradient">memorable.</span></span>
            </h1>
            <p class="lead hero-copy">
              Corporate events, sports, product launches and brand activations, planned and produced
              end to end by a team of 65.
            </p>
            <div class="hero-actions">
              <NuxtLink to="/contact" class="btn btn-amber">Plan your event</NuxtLink>
              <NuxtLink to="/work" class="btn btn-ghost">
                <span class="play">
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M3 1.5L12 7L3 12.5Z" fill="#fff" />
                  </svg>
                </span>
                See our work
              </NuxtLink>
            </div>
          </div>
          <div class="hero-gallery-wrap">
            <div class="hero-gallery-controls" role="group" aria-label="Move through featured work">
              <button
                type="button"
                class="hero-gallery-arrow"
                aria-label="Show previous cards"
                :disabled="!canScrollHeroGalleryPrevious"
                @click="scrollHeroGallery(-1)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                class="hero-gallery-arrow"
                aria-label="Show next cards"
                :disabled="!canScrollHeroGalleryNext"
                @click="scrollHeroGallery(1)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
            <div
              ref="heroGallery"
              class="hero-gallery"
              :class="{ 'is-reordering': isHeroTrackResetting }"
              @scroll="updateHeroGalleryControls"
            >
              <div
                class="hero-gallery-track"
                :class="{ 'is-moving': isHeroTrackMoving, 'is-resetting': isHeroTrackResetting }"
                :style="{ '--hero-track-offset': `${heroTrackOffset}px` }"
                role="group"
                aria-label="Explore our event work"
                @mouseleave="hoveredHeroBackground = null"
                @focusout="clearHeroBackgroundOnFocusLeave"
              >
                <NuxtLink
                  v-for="(card, i) in displayedHeroCards"
                  :key="card.title"
                  :to="card.to"
                  class="hero-card"
                  :style="{ '--card-index': i }"
                  @mouseenter="hoveredHeroBackground = card.src"
                  @focus="hoveredHeroBackground = card.src"
                >
                  <img :src="card.src" :alt="card.alt" :fetchpriority="i === 0 ? 'high' : 'auto'" />
                  <span class="hero-card-copy">
                    <span class="hero-card-eyebrow">{{ card.eyebrow }}</span>
                    <span class="hero-card-title">{{ card.title }}</span>
                  </span>
                  <span class="hero-card-arrow" aria-hidden="true">↗</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <section class="wrap stats">
      <div class="glass stats-in">
        <div
          v-for="(s, i) in stats"
          :key="s.l"
          v-reveal="i"
          :class="['stat-item', glassTints[i % glassTints.length]]"
        >
          <StatCounter :value="s.v" />
          <span>{{ s.l }}</span>
        </div>
      </div>
    </section>

    <section class="wrap section">
      <span v-reveal class="eyebrow">What we do</span>
      <h2 v-reveal class="h2" style="margin: 12px 0 14px">Events. Sports. Spaces.</h2>
      <p v-reveal class="lead" style="max-width: 640px; margin-bottom: 32px">
        We design the experience, build the venue and run the night. One team carries your idea from
        first concept to final applause.
      </p>
      <div class="grid g3">
        <NuxtLink
          v-for="(c, i) in chapters"
          :key="c.t"
          :to="c.to"
          :class="['card', glassTints[i % glassTints.length]]"
          v-reveal="i"
        >
          <div class="pic" style="aspect-ratio: 4/3">
            <img :src="c.src" :alt="c.alt" loading="lazy" />
          </div>
          <div class="tx">
            <h3 class="h3" style="margin: 20px 0 8px">{{ c.t }}</h3>
            <p class="body" style="margin-bottom: 14px">{{ c.d }}</p>
            <span class="link">{{ c.link }} →</span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="wrap section">
      <div v-reveal class="sec-head">
        <div>
          <span class="eyebrow">Selected work</span>
          <h2 class="h2">Our latest major engagements</h2>
        </div>
        <NuxtLink to="/work" class="link">All projects →</NuxtLink>
      </div>
      <FeatureProject :p="featured" />
      <div class="grid g3"><ProjectCard v-for="p in homeWork" :key="p.slug" :p="p" /></div>
    </section>

    <section class="wrap section">
      <span v-reveal class="eyebrow">Services</span>
      <h2 v-reveal class="h2" style="margin: 12px 0 28px; max-width: 760px">
        Everything an event needs, under one roof
      </h2>
      <div class="svc-list">
        <NuxtLink
          v-for="(s, i) in services"
          :key="s.t"
          to="/services"
          :class="['svc', 'glass', glassTints[i % glassTints.length]]"
          v-reveal="i"
        >
          <h3>{{ s.t }}</h3>
          <p>{{ s.s }}</p>
          <span class="link">Learn more →</span>
        </NuxtLink>
      </div>
    </section>

    <section class="wrap section">
      <span v-reveal class="eyebrow">Venues and assets</span>
      <h2 v-reveal class="h2" style="margin: 12px 0 14px">We own what we build with</h2>
      <p v-reveal class="lead" style="max-width: 640px; margin-bottom: 32px">
        Two Sri Lankan firsts that give your event a venue and a floor nobody else can offer.
      </p>
      <div class="grid g2">
        <NuxtLink
          v-for="(v, i) in venues"
          :key="v.t"
          to="/venues"
          :class="['card', glassTints[i % glassTints.length]]"
          v-reveal="i"
        >
          <div class="pic"><img :src="v.src" :alt="v.alt" loading="lazy" /></div>
          <div class="tx">
            <span class="eyebrow">{{ v.tag }}</span>
            <h3 class="h3">{{ v.t }}</h3>
            <p class="body" style="margin-top: 8px">{{ v.short }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="section clients-section">
      <div class="wrap">
        <div class="dark" v-reveal>
          <span class="eyebrow">Trusted by</span>
          <h2 class="h2">Brands that trust us with their biggest moments</h2>
          <div class="logos" role="region" aria-label="Our trusted clients">
            <div class="logos-track">
              <div class="logos-slide">
                <div v-for="c in clients" :key="c.name" class="logo-tile">
                  <img :src="c.src" :alt="c.name" loading="lazy" />
                </div>
              </div>
              <div class="logos-slide" aria-hidden="true">
                <div v-for="c in clients" :key="`duplicate-${c.name}`" class="logo-tile">
                  <img :src="c.src" alt="" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="wrap section">
      <div v-reveal class="sec-head">
        <div>
          <span class="eyebrow">Events</span>
          <h2 class="h2">Come and see our work</h2>
        </div>
        <NuxtLink to="/events" class="link">All events →</NuxtLink>
      </div>
      <div class="stack">
        <NuxtLink
          v-for="(e, i) in upcoming"
          :key="e.t"
          to="/events"
          :class="['ev', 'glass', glassTints[i % glassTints.length]]"
          v-reveal="i"
        >
          <div class="date">
            <b>{{ e.day }}</b>
            <small>{{ e.mon }}</small>
          </div>
          <div class="ev-body">
            <div class="t">{{ e.t }}</div>
            <div class="p">{{ e.p }}</div>
          </div>
          <span class="link ev-link">Event details →</span>
        </NuxtLink>
      </div>
      <p class="body" style="margin-top: 12px">Join us at upcoming events across Sri Lanka.</p>
    </section>

    <section class="wrap section">
      <div class="split glass glass--sky" v-reveal style="padding: clamp(20px, 4vw, 48px)">
        <div class="photo">
          <img
            src="/images/chairman.jpeg"
            alt="Srimal Wimalaratne, Chairman and Co-Founder of Million Laugh"
          />
        </div>
        <div>
          <span class="eyebrow">From the chairman</span>
          <blockquote class="quote">
            Success isn't measured by what we take but by what we give back.
          </blockquote>
          <p class="lead">
            We co-founded Million Laugh in 2008 to build a company where every team member, customer
            and partner feels like part of a greater family.
          </p>
          <p class="body" style="margin: 18px 0">
            <strong style="color: var(--ink)">Srimal Wimalaratne</strong>
            <br />
            Chairman and Co-Founder
          </p>
          <NuxtLink to="/about" class="link">Read the full message →</NuxtLink>
        </div>
      </div>
    </section>

    <section class="wrap section">
      <div class="split">
        <div>
          <span v-reveal class="eyebrow">Our team</span>
          <h2 v-reveal class="h2" style="margin: 10px 0 12px">One team, one vision</h2>
          <p class="lead" style="margin-bottom: 14px">
            We are a close-knit family bound by creativity and a drive to get every detail right.
            Every voice is heard, and hard work is balanced with laughter.
          </p>
          <NuxtLink to="/about" class="link">Meet the team →</NuxtLink>
        </div>
        <div class="photo">
          <img src="/images/million-laugh-team.png" alt="The Million Laugh team" loading="lazy" />
        </div>
      </div>
    </section>

    <section class="wrap section">
      <div v-reveal class="csr-intro">
        <span class="eyebrow">Corporate social responsibility</span>
        <h2 class="h2" style="margin: 10px 0 12px">For people, for planet, for the future</h2>
        <p class="lead">
          We commit more than LKR 2 million every year to community and environmental work.
        </p>
      </div>
      <div
        class="csr-accordion"
        role="group"
        aria-label="Our CSR initiatives"
        @mouseenter="isCsrHovered = true"
        @mouseleave="isCsrHovered = false"
        @focusin="isCsrFocused = true"
        @focusout="resumeCsrRotationOnFocusLeave"
      >
        <article
          v-for="(c, i) in csr"
          :key="c.t"
          :class="['csr-accordion-card', { 'is-active': activeCsrIndex === i }]"
        >
          <button
            :id="`csr-trigger-${i}`"
            class="csr-accordion-trigger"
            type="button"
            :aria-expanded="activeCsrIndex === i"
            :aria-controls="`csr-panel-${i}`"
            @click="activeCsrIndex = activeCsrIndex === i ? -1 : i"
          >
            <span class="csr-accordion-number">{{ c.n }}</span>
            <span class="csr-accordion-title">{{ c.t }}</span>
            <img
              v-if="activeCsrIndex !== i"
              class="csr-accordion-thumb"
              :src="c.src"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <span class="csr-accordion-icon" aria-hidden="true">
              {{ activeCsrIndex === i ? '−' : '+' }}
            </span>
          </button>
          <div
            :id="`csr-panel-${i}`"
            class="csr-accordion-panel"
            role="region"
            :aria-labelledby="`csr-trigger-${i}`"
            :aria-hidden="activeCsrIndex !== i"
          >
            <img :src="c.src" :alt="`${c.t} initiative`" loading="lazy" />
            <div class="csr-accordion-copy">
              <p class="csr-accordion-summary">{{ c.s }}</p>
              <p class="body">{{ c.d }}</p>
            </div>
          </div>
        </article>
      </div>
      <NuxtLink to="/csr" class="link csr-link">Read about our CSR work →</NuxtLink>
    </section>

    <section class="wrap section">
      <div v-reveal class="sec-head">
        <div>
          <span class="eyebrow">Gallery</span>
          <h2 class="h2">Photos from the field</h2>
        </div>
        <NuxtLink to="/gallery" class="link">Open the gallery →</NuxtLink>
      </div>
      <div class="mini">
        <div v-for="(g, i) in gallery.slice(0, 8)" :key="g.src" v-reveal="i" class="photo">
          <img :src="`/images/${g.src}.jpg`" :alt="g.alt" loading="lazy" />
        </div>
      </div>
    </section>

    <section class="wrap section">
      <div class="split" style="align-items: start">
        <div>
          <span v-reveal class="eyebrow">Contact</span>
          <h2 v-reveal class="h2" style="margin: 12px 0 14px">Tell us about your event</h2>
          <p class="lead" style="margin-bottom: 22px">
            Share the date, the guest count and the idea. We will reply with a plan and a quote.
          </p>
          <p class="body">
            <strong>Visit</strong>
            <br />
            {{ contact.address }}
            <br />
            <strong>Email</strong>
            <br />
            {{ contact.email }}
            <br />
            <strong>Call</strong>
            <br />
            {{ contact.phone }}
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  </div>
</template>
