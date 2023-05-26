<script lang="ts">
  import { hookInteractive } from '$lib/components/pointer.action'
  import { coordinates, shape } from '$lib/components/pointer.store'
</script>

<article class="flex h-full w-full flex-col items-center justify-center">
  <p class="font-serif text-9xl">
    <a
      use:hookInteractive={{ shape, coordinates, override: { rounded: 0 } }}
      aria-label="nagivate to about"
      href="/about"
    >
      Hello,
    </a>
  </p>
</article>
