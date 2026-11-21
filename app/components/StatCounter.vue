<script setup lang="ts">
const props = defineProps<{ value: string }>()
const { display, target } = useCountUp(props.value)
</script>

<template>
  <b ref="target">{{ display }}</b>
</template>
