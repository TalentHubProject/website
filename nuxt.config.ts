// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "/assets/css/main.css"
  ],
  modules: [
    ['nuxt-swiper'],
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        // 'Poppins': true,
        Poppins: [300, 400, 500, 600, 700, 800],
        download: true,
        inject: true
      }
    }]
  ],
  tailwindcss: {
    configPath: '../tailwind.config.js'
  }
})
