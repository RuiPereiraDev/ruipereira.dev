// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/scss/main.scss'],
    telemetry: false,
    compatibilityDate: '2025-01-01',
    modules: ['@nuxt/devtools', '@nuxt/image'],
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in'
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
                githubRepo: 'RuiPereiraDev/SimpleScore'
            },
            SimpleMOTD: {
                bStats: [19306, 19307, 19308, 19309],
                spigotID: 2581,
                githubRepo: 'RuiPereiraDev/SimpleMOTD'
            }
        }
    },
    $production: {
        nitro: {
            preset: 'cloudflare_module',
            cloudflare: {
                deployConfig: true,
                nodeCompat: true,
                wrangler: {
                    name: 'ruipereira',
                    compatibility_date: '2025-05-05',
                    kv_namespaces: [{
                        binding: 'CACHE',
                        id: 'ecd92fd528a4437e90c998d1d37137c8'
                    }]
                }
            },
            storage: {
                cache: {
                    driver: 'cloudflareKVBinding',
                    binding: 'CACHE'
                }
            }
        }
    },
    $development: {
        nitro: {
            storage: {
                cache: {
                    driver: 'memory'
                }
            }
        }
    }
})
