<script setup lang="ts">
import { contact } from '~/data/site'
import emailjs from '@emailjs/browser'
import { ref, reactive } from 'vue'

withDefaults(defineProps<{ full?: boolean }>(), { full: false })

const sent = ref(false)
const sending = ref(false)
const sendError = ref<string | null>(null)

const formData = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  event_type: 'Corporate event',
  event_date: '',
  guests: '',
  message: ''
})

// Today's date in YYYY-MM-DD format for min attribute
const today = new Date().toISOString().split('T')[0]

// Format date for email template (user-friendly format)
function formatDateForEmail(dateStr: string): string {
  if (!dateStr) return 'Not specified'
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

const EMAILJS_CONFIG = {
  serviceId: 'service_i0b11an',
  templateId: 'template_xyz789',
  publicKey: 'p1sWGViGQPTgg6qBM'
}

const WHATSAPP_NUMBER = contact.whatsapp.replace(/\D/g, '')

async function handleSubmit() {
  if (sending.value) return
  
  sending.value = true
  sendError.value = null
  
  try {
    // Prepare template parameters - simple key-value pairs (EmailJS doesn't use Handlebars)
    const templateParams = {
      event_type: formData.event_type,
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Not provided',
      phone: formData.phone,
      event_date: formatDateForEmail(formData.event_date),
      guests: formData.guests || 'Not specified',
      message: formData.message,
      date: new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    }
    
    // Send email via EmailJS
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )
    
    // Open WhatsApp with pre-filled message
    const whatsappMessage = encodeURIComponent(
      `New enquiry from MillionLaugh website:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'Not provided'}\n` +
      `Phone: ${formData.phone}\n` +
      `Event Type: ${formData.event_type}\n` +
      `Event Date: ${formatDateForEmail(formData.event_date)}\n` +
      `Guests: ${formData.guests || 'Not specified'}\n` +
      `Message: ${formData.message}`
    )
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`
    window.open(whatsappUrl, '_blank')
    
    // Show success state
    sent.value = true
    // Reset form after short delay
    setTimeout(() => {
      Object.keys(formData).forEach(key => {
        formData[key as keyof typeof formData] = ''
      })
      formData.event_type = 'Corporate event'
      sent.value = false
    }, 3000)
    
  } catch (error) {
    console.error('EmailJS Error:', error)
    sendError.value = 'Failed to send enquiry. Please try again or contact us directly.'
  } finally {
    sending.value = false
  }
}
</script>
<template>
  <form class="form glass glass--mint" v-reveal @submit.prevent="handleSubmit">
    <label>Name<input type="text" placeholder="Your name" required v-model="formData.name"></label>
    <label>Work email<input type="email" placeholder="name@company.com" required v-model="formData.email"></label>
    <template v-if="full">
      <label>Company<input type="text" placeholder="Company or organisation" v-model="formData.company"></label>
      <label>Phone<input type="tel" placeholder="+94" required v-model="formData.phone"></label>
    </template>
    <template v-else>
      <label>Phone<input type="tel" placeholder="+94" required v-model="formData.phone"></label>
    </template>
    <label>Event type
      <select v-model="formData.event_type" required>
        <option>Corporate event</option>
        <option>Sports event</option>
        <option>Product launch</option>
        <option v-if="full">Conference</option>
        <option>Brand activation</option>
        <option v-if="full">Exhibition</option>
        <option>Venue or ground cover</option>
      </select>
    </label>
    <label>Event date
      <input type="date" required v-model="formData.event_date" @change="formatDate" :min="today">
      <span class="date-hint">Approximate date</span>
    </label>
    <label v-if="full" class="full">Number of guests<input type="text" placeholder="Approximate guest count" v-model="formData.guests"></label>
    <label class="full">About the event<textarea rows="5" placeholder="Venue, ideas, anything we should know" required v-model="formData.message" /></label>
    
    <p v-if="sendError" class="error" role="alert">{{ sendError }}</p>
    <p v-if="sent" class="thanks" role="status">Thank you! Your enquiry has been sent. We'll get back to you soon.</p>
    
    <div class="actions">
      <button type="submit" class="btn btn-amber" :disabled="sending">
        <span v-if="sending">Sending...</span>
        <span v-else>Send enquiry</span>
      </button>
    </div>
  </form>
</template>
