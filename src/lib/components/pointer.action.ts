import { cubicOut } from 'svelte/easing'
import type { Tweened } from 'svelte/motion'
import { derived, get } from 'svelte/store'
import type { Coordinates, Opacity, Shape } from './pointer.store'

export const hookCoordinates = (
  el: Window,
  {
    coordinates,
    opacity,
  }: {
    coordinates: Tweened<Coordinates>
    opacity: Tweened<Opacity>
  },
) => {
  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth - 0.5) / 0.5
    const y = (event.clientY / window.innerHeight - 0.5) / 0.5

    const $opacity = get(opacity)

    if (!$opacity) {
      coordinates.set({ x, y }, { duration: 0, delay: 0 })
      opacity.set(1, { duration: 125 })
    } else {
      coordinates.set({ x, y }, { duration: 125, easing: cubicOut })
    }
  }

  const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
    if (!event.beta || !event.gamma || !event.alpha) return

    const x = (event.gamma / 90) * 2.5
    const y = ((event.beta - 45) / 90) * 2.5

    const $opacity = get(opacity)

    if (!$opacity) {
      coordinates.set({ x, y }, { duration: 0, delay: 0 })
      opacity.set(1, { duration: 125 })
    } else {
      coordinates.set({ x, y }, { duration: 125, easing: cubicOut })
    }
  }

  const handleSwitchToDeviceOrientation = () => {
    el.removeEventListener('mousemove', handleMouseMove)
    el.removeEventListener('mouseout', handleMouseOut)
  }

  const handleMouseOut = (event: MouseEvent) => {
    if (event.relatedTarget === null) {
      opacity.set(0, { duration: 125 })
      coordinates.set({ x: 0, y: 0 }, { delay: 125 })
    }
  }

  el.addEventListener('mousemove', handleMouseMove)
  el.addEventListener('deviceorientation', handleSwitchToDeviceOrientation, { once: true })
  el.addEventListener('deviceorientation', handleDeviceOrientation)
  el.addEventListener('mouseout', handleMouseOut)

  return {
    destroy: () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('deviceorientation', handleSwitchToDeviceOrientation)
      el.removeEventListener('deviceorientation', handleDeviceOrientation)
      el.removeEventListener('mouseout', handleMouseOut)
    },
  }
}

export const hookInteractive = (
  el: HTMLElement,
  {
    shape,
    coordinates,
    override,
  }: {
    shape: Tweened<Shape>
    coordinates: Tweened<Coordinates>
    override: Partial<Shape>
  },
) => {
  const handleClick = (event: MouseEvent) => {
    if (!event.defaultPrevented) {
      el.click()
      event.preventDefault()
    }
  }

  const handleEnter = () => {
    const rect = el.getBoundingClientRect()

    addEventListener('click', handleClick)

    const width = override.width ?? rect.width / 16 ?? 1
    const height = override.height ?? rect.height / 16 ?? 1
    const rounded = override.rounded ?? 1

    shape.set({ width, height, rounded }, { duration: 125, easing: cubicOut })
  }

  const handleLeave = () => {
    removeEventListener('click', handleClick)

    shape.set({ width: 1, height: 1, rounded: 1 }, { duration: 125, easing: cubicOut })
  }

  const hover = derived(coordinates, ($coordinates) => {
    const rect = el.getBoundingClientRect()

    const top = (rect.top - window.innerHeight / 2) / (window.innerHeight / 2)
    const left = (rect.left - window.innerWidth / 2) / (window.innerWidth / 2)
    const bottom = (rect.bottom - window.innerHeight / 2) / (window.innerHeight / 2)
    const right = (rect.right - window.innerWidth / 2) / (window.innerWidth / 2)

    if (
      $coordinates.x > left &&
      $coordinates.x < right &&
      $coordinates.y > top &&
      $coordinates.y < bottom
    ) {
      return true
    } else {
      return false
    }
  })

  const unsubscribe = hover.subscribe(($hover) => {
    if ($hover) {
      handleEnter()
    } else {
      handleLeave()
    }
  })

  return {
    destroy: () => {
      unsubscribe()
      handleLeave()
    },
  }
}
