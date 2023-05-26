<script>
  import { hookInteractive } from '$lib/components/pointer.action'
  import { coordinates, shape } from '$lib/components/pointer.store'
  import Pointer from '$lib/components/pointer.svelte'
  import { fade } from 'svelte/transition'
  import '../app.css'

  export let data
</script>

<main class="h-full w-full">
  <h1
    class="underline-offset-6 fixed left-0 top-0 ml-4 mt-4 font-serif text-2xl underline [writing-mode:vertical-rl] md:ml-16 md:mt-16 md:text-6xl"
  >
    <a
      use:hookInteractive={{ shape, coordinates, override: { rounded: 0 } }}
      aria-label="nagivate home"
      href="/"
    >
      Aidan Temple
    </a>
  </h1>

  {#key data.url}
    <div
      class="h-full w-full"
      in:fade={{ duration: 125, delay: 125 }}
      out:fade={{ duration: 125 }}
    >
      <slot />
    </div>
  {/key}
</main>

<Pointer />
