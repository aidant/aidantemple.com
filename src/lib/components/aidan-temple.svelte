<script lang="ts">
  const lengths = (el: SVGElement) => {
    let total = 0

    for (const path of el.querySelectorAll('path')) {
      const length = path.getTotalLength()

      path.style.setProperty('--length', `${length}`)
      path.style.setProperty('--length-prior', `${total}`)
      path.style.setProperty('stroke-dasharray', `${length} ${length}`)
      path.style.setProperty('stroke-dashoffset', `${length}`)

      total += length
    }

    el.style.setProperty('--length-total', `${total}`)
  }
</script>

<svg
  use:lengths
  width="645"
  height="114"
  viewBox="0 0 645 114"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1.49902 103.5C28.999 103.5 95.9992 31 115.499 12.5C107.499 30.5 61.9991 109.5 93.9991 92.5"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M56 55C81.3978 55.4738 93.5571 55.2302 112 54"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <path
    d="M 127.5 53.0002 C 118 63.6668 101.6 85.9002 112 89.5002 C 122.4 93.1002 137.423 76 146.5 66 C 146.5 66 146.5 66 146.5 66 C 156.333 55.1667 170.5 42 181 52.5 C 169 41 154 59 146.5 66 C 139.238 74 136 87.4001 144 89.0001 C 150.883 90.3768 168.428 70.6688 182.282 52.8693 C 182.282 52.8693 182.282 52.8693 182.282 52.8693 C 188.555 44.8103 194.072 37.1425 197.5 32.0001 C 193.667 37.7501 187.769 45.2002 182.282 52.8693 C 172.025 67.2073 163.205 82.3106 172 88.5 C 185.5 98 223.5 35 239 51.5 C 226.5 36.5 182.282 88 205.5 89 C 212 89.28 221.617 79.8079 241.5 54 C 233.5 64.1667 220.3 85.3 231.5 88.5 C 242.7 91.7 261.833 65.8333 270 52.5 C 263.333 62.1667 249.5 80.9 253.5 86.5 C 258.5 93.5 266 65.5 296.5 51.5 C 263.5 88.5 282.5 104 306 69.5"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M135.5 41.5L136.5 42"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <path
    d="M429.5 25.9999C410 15.5 374.5 112.5 346.5 99.9999"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M461.5 9.99989C461.5 46.5 402 -9.49961 368 2.99989"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <path
    d="M 415.5 73.5 C 424.5 74.1667 447.019 62 443 52.5 C 434 43 391.5 87 420 90 C 432 91 450.5 66.5 463.5 52.5 C 465.5 51 441 94 449.5 86.5 C 456.5 78.5 483.5 49 490.5 50.5 C 485 62 477 76.5 474 88 C 480 77.5 501.1 53.7 515.5 52.5 C 485 90 504 96 529.5 72 C 531.557 70.286 534.605 67.2867 537.575 64.1429 C 537.575 64.1429 537.575 64.1429 537.575 64.1429 C 541.536 59.9501 545.357 55.5003 546.5 53.5 C 543.88 56.6798 540.787 60.2937 537.575 64.1429 C 536.264 65.7144 534.932 67.325 533.605 68.9613 C 533.605 68.9613 533.605 68.9613 533.605 68.9613 C 530.086 73.3003 526.596 77.82 523.584 82.2683 C 526.9243 77.8326 530.2647 73.397 533.605 68.9613 C 530.05 73.0301 526.572 77.6217 523.584 82.2683 C 526.9243 77.8326 530.2647 73.397 533.605 68.9613 C 539.703 61.9825 546.029 56.5419 550.5 55 C 556.167 53.1667 564 51.2059 569 56.5 C 577 65.5 549.378 100 527 83.5 C 525.8613 83.0894 524.7227 82.6789 523.584 82.2683 C 518.038 90.4593 514.114 98.4085 514.612 104.542 C 514.874 107.777 516.367 110.506 519.5 112.5"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <path
    d="M607.5 29.5C558 88 574.5 104.5 606 74C613 76.5 640 64 636 53C631.5 40.625 587 81.2105 609.5 89.5C619 93 637 75.5 644 66.5"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
  />
</svg>

<style>
  svg path {
    animation-name: handwriting;
    animation-duration: calc(var(--length) / var(--length-total) * 10s);
    animation-delay: calc(var(--length-prior) / var(--length-total) * 10s);
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes handwriting {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
