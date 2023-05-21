import type { Action } from "svelte/action"

export const coordinatesGlobal: Action<HTMLElement, never> = (el) => {
  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth - 0.5) / 0.5
    const y = (event.clientY / window.innerHeight - 0.5) / 0.5
    el.style.setProperty('--coordinates-x', x.toString())
    el.style.setProperty('--coordinates-y', y.toString())
  }

  addEventListener('mousemove', handleMouseMove)

  return {
    destroy: () => {
      removeEventListener('mousemove', handleMouseMove)
    },
  }
}


export const coordinatesLocal: Action<HTMLElement, { target: HTMLElement }> = (el, options) => {
  let target = options?.target

  const handleMouseMove = (event: MouseEvent) => {
    const bound = el.getBoundingClientRect()

    const centerX = bound.left + bound.width / 2
    const centerY = bound.top + bound.height / 2

    const mouseLocalX = event.clientX - centerX
    const mouseLocalY = event.clientY - centerY

    const scaledMouseLocalX = mouseLocalX * 0.5
    const scaledMouseLocalY = mouseLocalY * 0.5

    const x = ((scaledMouseLocalX + centerX) / window.innerWidth - 0.5) / 0.5
    const y = ((scaledMouseLocalY + centerY) / window.innerHeight - 0.5) / 0.5

    target?.style.setProperty('--coordinates-x', x.toString())
    target?.style.setProperty('--coordinates-y', y.toString())
  }

  const handleMouseEnter = () => {
    el.addEventListener('mousemove', handleMouseMove)
  }

  const handleMouseLeave = () => {
    el.removeEventListener('mousemove', handleMouseMove)

    target?.style.removeProperty('--coordinates-x')
    target?.style.removeProperty('--coordinates-y')
  }


  el.addEventListener('mouseenter', handleMouseEnter)
  el.addEventListener('mouseleave', handleMouseLeave)

  return {
    update: (options) => {
      target = options?.target
    },
    destroy: () => {
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }
}