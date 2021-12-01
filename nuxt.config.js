export default {
  head: {
    title: 'Happy Dog Adoption',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Adopt your dog here with the most detailed information'
      }
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

    css: [
      '@/assets/css/main.css'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  modules: [
  ],

  build: {
  },
  
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
