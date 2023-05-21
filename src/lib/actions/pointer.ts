export const pointer = (el: HTMLElement) => {
  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth - 0.5) / 0.5
    const y = (event.clientY / window.innerHeight - 0.5) / 0.5
    el.style.setProperty('--pointer-x', x.toString())
    el.style.setProperty('--pointer-y', y.toString())
  }

  addEventListener('mousemove', handleMouseMove)

  return {
    destroy: () => {
      removeEventListener('mousemove', handleMouseMove)
    },
  }
}
