<script>
  import { pointer } from '$lib/actions/pointer'
  import '../app.css'
</script>

<div
  use:pointer
  class="absolute left-[calc(var(--pointer-x)*50vw+50vw)] top-[calc(var(--pointer-y)*50vh+50vh)] h-4 w-4 rounded-full bg-black"
/>

<slot />
