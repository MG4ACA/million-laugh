<script setup lang="ts">
import { contact } from '~/data/site';
useHead({ title: 'Contact | Million Laugh Entertainment' });
const info = [
  { k: 'Visit', v: contact.address },
  { k: 'Email', v: contact.email },
  { k: 'Call', v: contact.phone },
  { k: 'WhatsApp', v: contact.whatsapp },
];
const glassTints = ['glass--mint', 'glass--mint', 'glass--mint', 'glass--amber'];

const getInfoLink = (key: string) => {
  switch (key) {
    case 'Visit':
      return `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}`;
    case 'Email':
      return `mailto:${contact.email}`;
    case 'Call':
      return `tel:${contact.phone}`;
    case 'WhatsApp':
      return `https://wa.me/${contact.whatsapp}`;
    default:
      return '#';
  }
};
</script>
<template>
  <div>
    <PageHead chip="Contact">
      <template #title>
        Tell us about
        <span class="mark">your event.</span>
      </template>
      Share the date, the guest count and the idea. We will reply with a plan and a quote.
      <template #extra>
        <div class="side-by-side">
          <div class="left-col">
            <div class="stack" style="gap: 10px">
              <a
                v-for="(i, index) in info"
                :key="i.k"
                :href="getInfoLink(i.k)"
                :class="['info', 'glass', glassTints[index % glassTints.length]]"
                v-reveal="index"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{{ i.k }}</span>
                <b>{{ i.v }}</b>
              </a>
            </div>
            <div v-reveal class="mapbox home-contact-map" style="margin-top: 24px">
              <iframe
                :src="`https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`"
                width="100%"
                height="100%"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Million Laugh Entertainment location on Google Maps"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="right-col">
            <ContactForm full />
          </div>
        </div>
      </template>
    </PageHead>
  </div>
</template>
