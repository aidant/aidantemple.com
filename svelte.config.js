import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),

  kit: {
    csp: {
      mode: 'auto',
      directives: {
        'default-src': ["'self'"],
        'style-src-elem': ["'self'", 'fonts.googleapis.com', 'unsafe-inline'],
        'font-src': ["'self'", 'fonts.gstatic.com'],
      },
    },
    adapter: adapter(),
  },
}
