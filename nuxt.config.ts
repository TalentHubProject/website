// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-lucide-icons',
    "@nuxt/image",
    '@nuxtjs/google-fonts',
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
      Inter: [400, 500, 600, 700],
    }
  },

  devtools: true,
  ssr: true,
})