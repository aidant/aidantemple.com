import type { Action } from 'svelte/action';

export const interactive: Action<HTMLElement, { class: string, target: HTMLElement }> = (el, options) => {
  let target = options?.target
  let classes = options?.class.split(' ') || []

  const handleMouseEnter = () => {
    target?.classList.add(...classes)
  }

  const handleMouseLeave = () => {
    target?.classList.remove(...classes)
  }

  el.addEventListener('mouseenter', handleMouseEnter)
  el.addEventListener('mouseleave', handleMouseLeave)

  return {
    update: (options) => {
      target = options?.target
      classes = options?.class.split(' ') || []
    },
    destroy: () => {
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }
}
