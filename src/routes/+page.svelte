<main
  class="flex h-full w-full flex-col items-center justify-around after:absolute after:inset-0 after:-z-10 after:[background-color:#df2f2f] after:[clip-path:polygon(0_0,100%_0,100%_45%,0_55%)] lg:flex-row lg:text-xl lg:after:[clip-path:polygon(0_0,33%_0,66%_100%,0_100%)]"
>
  <h1
    class="w-min font-serif text-8xl font-black mix-blend-difference [color:#df2f2f] [line-height:1.25] lg:m-16 lg:[font-size:12rem]"
  >
    Aidan Temple
  </h1>
  <div class="box-border flex w-full max-w-prose flex-col px-8 lg:m-16 lg:box-content lg:px-0">
    <span class="max-w-fit [line-height:1.125] 2xl:text-2xl">
      I'm a <span class="font-bold mix-blend-difference [color:#df2f2f]">Full Stack Developer</span>
      passionate about empowering people through new and creative experiences. I have extensive knowledge
      of the JavaScript ecosystem and skills in Frontend Development, Backend Development, DevOps Engineering,
      and UI/UX Design. I thrive in collaborative environments, especially when a pub lunch is involved.
    </span>
    <div class="mt-8 flex flex-row items-center justify-between lg:ml-auto lg:gap-8">
      <a
        href="https://github.com/aidant"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          class="h-10 w-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45 44"
        >
          <title>GitHub</title>
          <path
            fill="white"
            d="M22.477.927C10.485.927.76 10.65.76 22.647c0 9.596 6.223 17.736 14.853 20.608 1.087.2 1.483-.471 1.483-1.047 0-.516-.019-1.881-.03-3.693-6.04 1.312-7.315-2.912-7.315-2.912-.988-2.51-2.412-3.178-2.412-3.178-1.972-1.346.149-1.32.149-1.32 2.18.154 3.327 2.239 3.327 2.239 1.937 3.319 5.084 2.36 6.321 1.804.197-1.403.759-2.36 1.379-2.903-4.823-.548-9.894-2.412-9.894-10.734 0-2.371.847-4.311 2.236-5.828-.224-.55-.969-2.759.214-5.748 0 0 1.822-.584 5.972 2.226 1.732-.482 3.59-.722 5.437-.732 1.845.01 3.703.25 5.437.732 4.147-2.81 5.967-2.226 5.967-2.226 1.185 2.989.44 5.198.217 5.748 1.392 1.517 2.232 3.457 2.232 5.828 0 8.344-5.078 10.18-9.916 10.717.779.67 1.474 1.996 1.474 4.021 0 2.904-.027 5.247-.027 5.959 0 .581.392 1.257 1.493 1.045C37.981 40.375 44.2 32.24 44.2 22.647c0-11.996-9.726-21.72-21.722-21.72"
          />
        </svg>
      </a>
      <a
        href="https://youtube.com/@aidan.temple"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          class="h-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 18"
        >
          <title>Youtube</title>
          <path
            fill="#fff"
            d="M23.5 3.19a3.02 3.02 0 0 0-2.12-2.14C19.5.55 12 .55 12 .55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 3.19C0 5.07 0 9 0 9s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.87.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 12.93 24 9 24 9s0-3.93-.5-5.81ZM9.54 12.57V5.43L15.82 9l-6.28 3.57Z"
          />
        </svg>
      </a>
      <a
        href="https://au.linkedin.com/in/aidan-temple"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          class="h-10 w-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 536 535"
        >
          <title>LinkedIn</title>
          <path
            fill="white"
            fill-rule="evenodd"
            d="M42 0C19 0 0 19 0 42v451c0 23 19 42 42 42h452c23 0 42-19 42-42V42c0-23-19-42-42-42H42Zm120 203v256H82V203h80Zm133 93c-3 10-3 21-4 89v74h-80V203h77v35l3-4a88 88 0 0 1 84-37c27 2 43 9 57 23 13 13 19 27 24 52 2 11 2 14 3 99v88h-80v-74l-1-82c-3-17-10-27-21-32-6-3-7-3-19-3-11 0-13 0-19 2-9 3-16 10-20 19l-4 7ZM155 90c24 24 14 66-19 76a46 46 0 0 1-60-44c0-26 20-46 46-46 13 0 23 4 33 14Z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      <div class="inline-block [background-color:#df2f2f]">
        <a
          class="relative block px-8 py-4 font-serif font-black mix-blend-difference [color:#df2f2f] [letter-spacing:0.0625rem]"
          href="mailto:hello@aidantemple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>
    </div>
  </div>
</main>

<style>
  main::after {
    animation: background-horizontal 0.75s cubic-bezier(0.65, 0, 0.35, 1);
  }
  @media screen and (max-width: 64rem) {
    main::after {
      animation: background-portrait 0.75s cubic-bezier(0.65, 0, 0.35, 1);
    }
  }

  @keyframes background-horizontal {
    0% {
      clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    }
  }

  @keyframes background-portrait {
    0% {
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }
  }
</style>
