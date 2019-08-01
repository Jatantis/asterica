const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Asterica digital web studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'yandex-verification', content: '8afb5a13c5424aa7' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Asterica web studio' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon/favicon-16x16.png' },
      { rel: 'mask-icon',  href: '/img/favicon/safari-pinned-tab.svg', color:'#848484' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],
  server: {
    host: '192.168.0.23',
    port: 3000
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
     { src: '~/plugins/ksvuescrollmagic', ssr: false },
     { src: '~plugins/metrika.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
      /*
      ** You can extend webpack config here
      */
      vendor: ['three','axios', 'gsap'],
      extend(config, ctx) {

      }
  },

  generate: {
      dir: 'public',
  }
}
