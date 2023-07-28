// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
    srcDir: 'src/',
    css: ['~/assets/scss/main.scss'],
    telemetry: false,
    modules: ['@nuxt/devtools'],
    vite: {
        plugins: [svgLoader({})]
    },
    runtimeConfig: {
        plugins: {
            SimpleScore: [644],
            SimpleMOTD: [19306, 19307, 19308, 19309]
        }
    }
})
