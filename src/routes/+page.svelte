<script>
  import { coordinatesLocal } from "$lib/actions/coordinates"
  import { interactive } from "$lib/actions/interactive"
  import { pointer } from "$lib/stores/pointer"
</script>

<main class="flex flex-row items-center justify-around">
  <h1
    class="font-serif text-[10vw] font-semibold [font-variation-settings:'WONK'_0] [line-height:1]"
  >
    Aidan
    <br />
    Temple
  </h1>
  <img
    class="w-1/4 grayscale"
    src="./aidan-temple.jpg"
    alt=""
  />
</main>

<button
  use:interactive={{ class: '!h-32 !w-32', target: $pointer }}
  use:coordinatesLocal={{ target: $pointer }}
  class="h-32 w-32 cursor-none rounded-full border-2 border-white"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    class="m-auto h-16 w-16"
  >
    <path
      fill="currentColor"
      d="m203 147-72 72a4 4 0 0 1-6 0l-72-72a4 4 0 0 1 6-6l65 65V40a4 4 0 0 1 8 0v166l65-65a4 4 0 0 1 6 6Z"
    />
  </svg>
</button>
