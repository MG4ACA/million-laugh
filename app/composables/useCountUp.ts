export function useCountUp(value: string) {
  const display = ref(value)
  const target = ref<HTMLElement | null>(null)
  const finalValue = Number(value.replace(/,/g, ''))
  let cleanup = () => {}

  onMounted(() => {
    if (!target.value || !Number.isFinite(finalValue)) return

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionPreference.matches || !('IntersectionObserver' in window)) return

    let frame = 0
    let observer: IntersectionObserver | undefined
    const cancel = () => {
      observer?.disconnect()
      if (frame) window.cancelAnimationFrame(frame)
    }
    cleanup = cancel

    observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer?.disconnect()

      const start = performance.now()
      const duration = 1500
      display.value = '0'

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        display.value = Math.round(finalValue * eased).toLocaleString('en-US')
        if (progress < 1) frame = window.requestAnimationFrame(tick)
        else display.value = value
      }

      frame = window.requestAnimationFrame(tick)
    }, { threshold: 0.6 })

    observer.observe(target.value)
  })

  onBeforeUnmount(() => cleanup())

  return { display, target }
}
