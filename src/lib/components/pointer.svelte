<script lang="ts">
  import { hookCoordinates } from './pointer.action'
  import { coordinates, opacity, shape } from './pointer.store'
</script>

<svelte:window use:hookCoordinates={{ coordinates, opacity }} />

<div
  class="pointer-events-none fixed left-0 top-0 bg-white mix-blend-difference"
  style="
    width: {$shape.width}rem;
    height: {$shape.height}rem;
    border-radius: {$shape.rounded * 100}%;
    opacity: {$opacity};
    transform: translate(calc({$coordinates.x} * 50vw + 50vw), calc({$coordinates.y} * 50vh + 50vh)) translate(-50%, -50%)
  "
/>
