export function useScrolled(threshold = 12) {
  const scrolled = ref(false)
  let removeListener = () => {}

  onMounted(() => {
    const update = () => {
      scrolled.value = window.scrollY > threshold
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    removeListener = () => window.removeEventListener('scroll', update)
  })

  onBeforeUnmount(() => removeListener())

  return readonly(scrolled)
}
