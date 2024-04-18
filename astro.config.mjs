import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import prefetch from '@astrojs/prefetch'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), prefetch()],
    output: 'server',
    adapter: cloudflare({
        imageService: 'passthrough'
    })
})
