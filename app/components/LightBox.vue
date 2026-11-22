<script setup lang="ts">
import { onMounted, onBeforeUnmount, computed } from 'vue'
const props = defineProps<{ 
  items: { src: string; alt: string; type: 'image' | 'video'; videoUrl?: string }[]; 
  index: number | null 
}>()
const emit = defineEmits<{ close: []; go: [i: number] }>()
const n = computed(() => props.items.length)
function step(d: number) { emit('go', (props.index! + d + n.value) % n.value) }
function key(e: KeyboardEvent) {
  if (props.index === null) return
  if (e.key === 'Escape') emit('close'); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1)
}
onMounted(() => window.addEventListener('keydown', key))
onBeforeUnmount(() => window.removeEventListener('keydown', key))

const currentItem = computed(() => props.index !== null ? props.items[props.index] : null)
</script>
<template>
  <div v-if="index !== null" class="lb" role="dialog" aria-modal="true" :aria-label="currentItem?.type === 'video' ? 'Video viewer' : 'Photo viewer'" @click.self="emit('close')">
    <div class="lb-content">
      <template v-if="currentItem?.type === 'video' && currentItem.videoUrl">
        <iframe 
          :key="currentItem.src" 
          :src="currentItem.videoUrl" 
          :title="currentItem.alt"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
        ></iframe>
      </template>
      <template v-else>
        <img :key="currentItem?.src" :src="currentItem?.src" :alt="currentItem?.alt">
      </template>
    </div>
    <button class="x" aria-label="Close" @click="emit('close')">✕</button>
    <button class="pv" aria-label="Previous" @click="step(-1)">‹</button>
    <button class="nx" aria-label="Next" @click="step(1)">›</button>
  </div>
</template>
