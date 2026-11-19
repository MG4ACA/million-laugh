<script setup lang="ts">
const props = defineProps<{ items: { src: string; alt: string }[]; index: number | null }>()
const emit = defineEmits<{ close: []; go: [i: number] }>()
const n = computed(() => props.items.length)
function step(d: number) { emit('go', (props.index! + d + n.value) % n.value) }
function key(e: KeyboardEvent) {
  if (props.index === null) return
  if (e.key === 'Escape') emit('close'); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1)
}
onMounted(() => window.addEventListener('keydown', key))
onBeforeUnmount(() => window.removeEventListener('keydown', key))
</script>
<template>
  <div v-if="index !== null" class="lb" role="dialog" aria-modal="true" aria-label="Photo viewer" @click.self="emit('close')">
    <img :key="items[index].src" :src="items[index].src" :alt="items[index].alt">
    <button class="x" aria-label="Close" @click="emit('close')">✕</button>
    <button class="pv" aria-label="Previous photo" @click="step(-1)">‹</button>
    <button class="nx" aria-label="Next photo" @click="step(1)">›</button>
  </div>
</template>
