// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/scss/main.scss'],
    telemetry: false,
    compatibilityDate: '2025-01-01',
    modules: ['@nuxt/devtools', '@nuxt/image'],
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        }
    },
    nitro: {
        preset: 'cloudflare_module',
        cloudflare: {
            deployConfig: true,
            nodeCompat: true
        },
        storage: {
            cache: {
                driver: 'cloudflareKVBinding',
                binding: 'cache'
            }
        }
    },
    runtimeConfig: {
        guildID: '217018114083127296',
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
