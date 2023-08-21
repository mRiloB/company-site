// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  appConfig: {
    title: 'Moby Site',
    theme: {
      colors: {
        primary: '#4681E9',
        secondary: '#FFFFFF',
        dark: '#000000',
      }
    }
  },
})
