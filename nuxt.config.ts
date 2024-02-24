// https://nuxt.com/docs/api/configuration/nuxt-config
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
    nitro: {
        storage: {
            cache: {
                driver: 'cloudflareR2Binding',
                binding: 'CACHE'
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
