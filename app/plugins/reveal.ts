import type { Directive } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined

  const reveal: Directive<HTMLElement, number | { delay?: number }> = {
    getSSRProps() {
      return {}
    },
    mounted(element, binding) {
      const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
      if (motionPreference.matches || !('IntersectionObserver' in window)) return

      const delay = typeof binding.value === 'number'
        ? binding.value * 80
        : binding.value?.delay ?? 0

      if (delay > 0) element.style.setProperty('--reveal-delay', `${delay}ms`)
      element.classList.add('reveal-pending')

      observer ??= new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('reveal-visible')
          observer?.unobserve(entry.target)
        }
      }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' })

      observer.observe(element)
    },
    unmounted(element) {
      observer?.unobserve(element)
    }
  }

  nuxtApp.vueApp.directive('reveal', reveal)

  if (import.meta.server) return

  nuxtApp.hook('app:mounted', () => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('motion-ready')
    }
  })
})
