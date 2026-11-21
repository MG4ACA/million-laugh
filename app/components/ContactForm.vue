<script setup lang="ts">
import { contact } from '~/data/site'
withDefaults(defineProps<{ full?: boolean }>(), { full: false })
const sent = ref(false)
</script>
<template>
  <form class="form glass glass--mint" v-reveal @submit.prevent="sent = true">
    <label>Name<input type="text" placeholder="Your name" required></label>
    <label>Work email<input type="email" placeholder="name@company.com" required></label>
    <template v-if="full">
      <label>Company<input type="text" placeholder="Company or organisation"></label>
      <label>Phone<input type="tel" placeholder="+94"></label>
    </template>
    <label>Event type
      <select><option>Corporate event</option><option>Sports event</option><option>Product launch</option><option v-if="full">Conference</option><option>Brand activation</option><option v-if="full">Exhibition</option><option>Venue or ground cover</option></select>
    </label>
    <label>Event date<input type="text" placeholder="Approximate date"></label>
    <label v-if="full" class="full">Number of guests<input type="text" placeholder="Approximate guest count"></label>
    <label class="full">About the event<textarea rows="5" placeholder="Venue, ideas, anything we should know" /></label>
    <p v-if="sent" class="thanks" role="status">Thank you. This is a prototype, so nothing was sent.</p>
    <div class="actions">
      <button type="submit" class="btn btn-amber">Send enquiry</button>
      <a class="link" href="#" @click.prevent>Or message us on WhatsApp →</a>
    </div>
  </form>
</template>
