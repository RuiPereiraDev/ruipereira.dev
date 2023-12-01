// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
    srcDir: 'src/',
    css: ['~/assets/scss/main.scss'],
    telemetry: false,
    modules: ['@nuxt/devtools', '@nuxt/image'],
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        }
    },
    vite: {
        plugins: [svgLoader({})]
    },
    nitro: {
        storage: {
            cache: {
                driver: 'cloudflareKVBinding',
                binding: 'CACHE'
            }
        }
    },
    runtimeConfig: {
        plugins: {
            SimpleScore: {
                bStats: [644],
                spigotID: 23243,
                hangarID: 'SimpleScore',
                modrinthID: 'qG43Afem',
                githubRepo: 'r4g3baby/SimpleScore'
            },
            SimpleMOTD: {
                bStats: [19306, 19307, 19308, 19309],
                spigotID: 2581,
                githubRepo: 'r4g3baby/SimpleMOTD'
            }
        }
    }
})
