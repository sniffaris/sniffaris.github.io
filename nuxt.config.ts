// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-22',

  app: {
    head: {
      title: "Sniffaris - Dog Walking and Pet Care in Cookridge",
      htmlAttrs: {
        lang: 'en'
      },
      meta:[
        { hid: 'description', name: 'description', content: 'Sniffaris offers professional dog walking and pet care services in Cookridge. Trusted and loved by pets and owners alike.' },
        { hid: 'og:title', property: 'og:title', content: 'Sniffaris Dog Walking and Pet Care in Cookridge' },
        { hid: 'og:description', property: 'og:description', content: 'Professional dog walking and pet care services in Cookridge by Sniffaris. Book a walk today!' },
        { hid: 'og:url', property: 'og:url', content: 'https://sniffaris.co.uk' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "Sniffaris",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Cookridge",
              "addressRegion": "West Yorkshire",
              "postalCode": "LS16",
              "addressCountry": "UK"
            },
            "url": "https://www.sniffaris.co.uk",
            "description": "Sniffaris provides dog walking and pet care services in the Cookridge area.",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "53.858055",
              "longitude": "-1.625505"
            },
            "sameAs": [
              "https://facebook.com/sniffaris",
              "https://instagram.com/sniffaris"
            ]
          })
        }
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" },
        { rel: "icon", type: "image/png", href: "/Sniffaris_Dog Badge (Lemon Green).png" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css", integrity: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH", crossorigin: "anonymous" },
        { rel: "stylesheet", href: "https://use.typekit.net/wlm8lru.css" }
      ],
    }
  },

  css: ['~/assets/css/main.css'],
  plugins:[{ src: '~/plugins/bootstrap.js', mode: 'client' }],
  modules: ['@nuxtjs/sitemap', "@nuxt/image"],
  site: {
    url: 'https://www.sniffaris.co.uk'
  },
  image: {
    format: ['webp'],
    quality: 80
  }
})