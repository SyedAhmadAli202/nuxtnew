import FilterWarningsPlugin from 'webpack-filter-warnings-plugin'
import { theme } from './config/vuetify.options'
import languages from './static/lang/languages'
import brand from './static/text/brand'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      dir: 'ltr'
    },
    title: brand.saas.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: brand.saas.desc },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      {
        name: 'msapplication-TileImage',
        content: '/favicons/ibz-logo-fav.png'
      },
      // PWA primary color
      { name: 'theme-color', content: theme.primary },
      // Facebook
      { property: 'author', content: 'Ibiza Token' },
      { property: 'og:site_name', content: 'luxi.ux-maestro.com' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      // Twitter
      { property: 'twitter:site', content: 'luxi.ux-maestro.com' },
      { property: 'twitter:domain', content: 'luxi.ux-maestro.com' },
      { property: 'twitter:creator', content: 'luxi' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:image:src', content: '/images/logo.png' },
      { property: 'og:url', content: brand.saas.url },
      { property: 'og:title', content: brand.saas.projectName },
      { property: 'og:description', content: brand.saas.desc },
      { name: 'twitter:site', content: brand.saas.url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: brand.saas.img },
      { property: 'og:image', content: brand.saas.img },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    ],
    link: [
      // Favicon
      { rel: 'shortcut icon', href: '/favicons/ibz-logo-fav.png' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicons/ibz-logo-fav.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicons/ibz-logo-fav.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicons/ibz-logo-fav.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicons/ibz-logo-fav.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicons/ibz-logo-fav.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicons/ibz-logo-fav.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicons/ibz-logo-fav.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicons/ibz-logo-fav2.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/ibz-logo-fav.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicons/ibz-logo-fav.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/ibz-logo-fav.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicons/ibz-logo-fav.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons//favicons/ibz-logo-fav.png'
      },
      { rel: 'manifest', href: '/favicons/manifest.json' },
      // Fonts and Icons
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://kit.fontawesome.com/a34eaafd69.js'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: theme.primary },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/transition.scss',
    '~/assets/vuetify-overide.scss',
    '~/assets/vendors/animate.css',
    '~/assets/vendors/animate-extends.css',
    '~/assets/vendors/hamburger-menu.css',
    '~/assets/vendors/slick-carousel/slick.css',
    '~/assets/vendors/slick-carousel/slick-theme.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-fragment-config',
    '~/plugins/vue-wow-config',
    { src: '~/plugins/vue-youtube-config', ssr: false },
    { src: '~plugins/i18n-config.js' },
    { src: '~/plugins/caroussel-config', ssr: false },
    { src: '~/plugins/countup-config', ssr: false },
    { src: '~/plugins/vue-scroll-nav', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/fontawesome'],

  fontawesome: {
    component: 'font-awesome-icon',
    suffix: false,
    icons: {
      solid: true,
      brands: true
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/html-minifier', { log: 'once', logHtml: true }],
    ['nuxt-typeform'],
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          xsDown: 599,
          xsUp: 600,
          smDown: 959,
          smUp: 960,
          mdDown: 1279,
          mdUp: 1280,
          lgDown: 1919,
          lgUp: 1920,
          xl: Infinity
        }
      }
    ],
    [
      '@nuxtjs/i18n',
      {
        // Options
        //to make it seo friendly remove below line and add baseUrl option to production domain
        seo: false,
        // baseUrl: 'https://my-nuxt-app.com',
        lazy: true,
        locales: languages,
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en'
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: true
        },
        langDir: 'static/lang/'
      }
    ]
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/styles.scss'],
    optionsPath: './config/vuetify.options.js'
  },
  /*
  ** Render configuration
  */

  render: {
    bundleRenderer: {
      directives: {
        shouldPreload: (file, type) => {
          return ['script', 'style', 'font'].includes(type)
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // cssSourceMap: false,
    loaders: {
      vus: { cacheBusting: true },
      scss: { sourceMap: false }
    },
    extend(config) {
      config.plugins.push(
        new FilterWarningsPlugin({
          exclude: /Critical dependency: the request of a dependency is an expression/
        })
      )
      //      if (ctx.isDev && ctx.isClient) {
      //        config.plugins.push(
      //          new ESLintPlugin({
      //            extensions: ["js", "vue"],
      //            exclude: ["node_modules", "static"],
      //            fix: false
      //          })
      //        );
      //      }
    }
  },
  /*
  ** Page Layout transition
  */
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
    beforeEnter() {
      console.log('Before enter...')
    },
    afterLeave(el) {
      console.log('afterLeave', el)
    }
  },
  /*
  ** Application Port
  */
  server: {
    port: 8008 // default: 3000
  }
}
