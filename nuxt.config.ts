// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hooks: {
    'prerender:routes' ({ routes }) {
      routes.clear() // Do not generate any routes (except the defaults)
    }
  },
  ssr: false,
  compatibilityDate: '2024-09-22',

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" },
        { rel: "icon", type: "image/png", href: "paw_print_icon_transparent.png" },
        //{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' }
      ],
      /*script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]*/
    }
  },

  css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/css/main.css'],
  plugins:[{ src: '~/plugins/bootstrap.js', mode: 'client' }]
})