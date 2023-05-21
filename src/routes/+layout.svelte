<script>
  import { coordinatesGlobal } from '$lib/actions/coordinates'
  import { pointer } from '$lib/stores/pointer'
  import '../app.css'
</script>

<slot />

<svelte:body use:coordinatesGlobal />

<div
  id="pointer"
  bind:this={$pointer}
  class="fixed h-4 w-4 rounded-full bg-white pointer-events-none mix-blend-difference"
/>

<style>
  :global(body):not(:hover) #pointer {
    display: none;
  }

  #pointer {
    transition: 
      width 0.25s cubic-bezier(0.77, 0, 0.175, 1),
      height 0.25s cubic-bezier(0.77, 0, 0.175, 1),
      transform 0.125s cubic-bezier(0.215, 0.610, 0.355, 1);

    transform: translate(-50%, 0) translate(calc(var(--coordinates-x) * 50vw + 50vw), calc(var(--coordinates-y) * 50vh));
  }
</style>

