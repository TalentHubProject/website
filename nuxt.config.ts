// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-lucide-icons',
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  devtools: true,
})