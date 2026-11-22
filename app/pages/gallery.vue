<script setup lang="ts">
import { gallery, type GalleryItem } from '~/data/site'
useHead({ title: 'Gallery | Million Laugh Entertainment' })
const cats = ['All', 'Sports', 'Corporate', 'Spaces', 'Activations']
const active = ref('All')
const filteredItems = computed(() => gallery.filter(g => active.value === 'All' || g.cat === active.value))
const open = ref<number | null>(null)

function getThumbnail(item: GalleryItem): string {
  if (item.type === 'video' && item.thumbnail) {
    return item.thumbnail
  }
  return `/images/${item.src}.jpg`
}

function getLightBoxItems(): { src: string; alt: string; type: 'image' | 'video'; videoUrl?: string }[] {
  return filteredItems.value.map(item => ({
    src: getThumbnail(item),
    alt: item.alt,
    type: item.type,
    videoUrl: item.videoUrl
  }))
}
</script>
<template>
  <div>
    <PageHead chip="Gallery">
      <template #title>Gallery <span class="mark">Photos & Videos.</span></template>
      <template #extra><div class="chips" style="margin-top:28px"><button v-for="c in cats" :key="c" :class="{ on: active === c }" @click="active = c">{{ c }}</button></div></template>
    </PageHead>
    <section class="wrap section" style="padding-top:0">
      <div class="mosaic">
        <button 
          v-for="(item, i) in filteredItems" 
          :key="item.src" 
          v-reveal="i" 
          type="button" 
          :aria-label="`Open ${item.type}: ${item.alt}`" 
          @click="open = i"
          :class="{ 'is-video': item.type === 'video' }"
        >
          <img :src="getThumbnail(item)" :alt="item.alt" loading="lazy">
          <span v-if="item.type === 'video'" class="play-overlay" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </span>
        </button>
      </div>
    </section>
    <LightBox :items="getLightBoxItems()" :index="open" @close="open = null" @go="open = $event" />
  </div>
</template>
