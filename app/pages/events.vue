<script setup lang="ts">
import { upcoming, recent } from '~/data/site'
useHead({ title: 'Events | Million Laugh Entertainment' })
const glassTints = ['glass--mint', 'glass--sky', 'glass--amber', 'glass--violet', 'glass--coral']
const expandedEvent = ref<number | null>(null)

function toggleEventDetails(index: number) {
  expandedEvent.value = expandedEvent.value === index ? null : index
}
</script>
<template>
  <div>
    <PageHead chip="Events"><template #title>Come and see <span class="mark">our work.</span></template></PageHead>
    <section class="wrap section" style="padding-top:0">
      <h2 v-reveal class="h2" style="font-size:clamp(26px,3vw,36px);margin-bottom:20px">Upcoming</h2>
      <div class="stack">
        <div
          v-for="(e, i) in upcoming"
          :key="e.t"
          v-reveal="i"
          :class="['event-card', glassTints[i % glassTints.length]]"
        >
          <div class="ev">
            <div class="date"><b>{{ e.day }}</b><small>{{ e.mon }}</small></div>
            <div class="event-summary">
              <div class="t">{{ e.t }}</div>
              <div class="p">{{ e.p }}</div>
            </div>
            <button
              class="link event-toggle"
              type="button"
              :aria-expanded="expandedEvent === i"
              :aria-controls="`event-details-${i}`"
              @click="toggleEventDetails(i)"
            >
              {{ expandedEvent === i ? 'Close details' : 'Event details' }}
            </button>
          </div>
          <Transition name="event-details">
            <div
              v-if="expandedEvent === i"
              :id="`event-details-${i}`"
              class="event-details"
              role="region"
              :aria-label="`${e.t} event details`"
            >
              <div class="event-details-inner">
                <img :src="e.src" :alt="e.alt" />
                <div class="event-details-copy">
                  <h3 class="h3">{{ e.t }}</h3>
                  <p class="body">{{ e.details }}</p>
                  <p class="event-details-meta">{{ e.p }}</p>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
    <section class="wrap section" style="padding-top:0">
      <h2 v-reveal class="h2" style="font-size:clamp(26px,3vw,36px);margin-bottom:20px">Recent events</h2>
      <div class="grid g2"><div v-for="(e, i) in recent" :key="e.t" v-reveal="i" :class="['glass', glassTints[i % glassTints.length]]" style="padding:26px 28px;border-radius:24px"><span class="eyebrow">{{ e.d }}</span><h3 class="h3" style="margin:8px 0">{{ e.t }}</h3><p class="body">{{ e.n }}</p><p class="body" style="margin-top:10px;font-weight:700;color:var(--teal)">{{ e.p }}</p></div></div>
    </section>
  </div>
</template>
