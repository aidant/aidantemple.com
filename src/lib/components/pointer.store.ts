import { tweened } from 'svelte/motion'

export interface Coordinates {
  x: number
  y: number
}
export const coordinates = tweened<Coordinates>({
  x: 0.5,
  y: 0.5,
})

export type Opacity = number
export const opacity = tweened<Opacity>(0)

export interface Shape {
  width: number
  height: number
  rounded: number
}
export const shape = tweened<Shape>({
  width: 1,
  height: 1,
  rounded: 1,
})
