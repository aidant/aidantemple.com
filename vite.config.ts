import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { VitePluginRadar } from 'vite-plugin-radar'

export default defineConfig({
  plugins: [
    VitePluginRadar({
      analytics: [
        {
          id: 'G-C10D2DP6WF',
        },
      ],
    }),
    sveltekit(),
  ],
})
