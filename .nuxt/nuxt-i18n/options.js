import locale6010b66b from '../..\\static\\lang\\en-US.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en"},
  vueI18nLoader: false,
  locales: [{"code":"es","iso":"es-ES","name":"Español","file":"es-ES.js","dir":"ltr"},{"code":"en","iso":"en-US","name":"English","file":"en-US.js","dir":"ltr"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "D:\\laragon\\www\\ibiza-web3\\static\\lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":true,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  seo: false,
  normalizedLocales: [{"code":"es","iso":"es-ES","name":"Español","file":"es-ES.js","dir":"ltr"},{"code":"en","iso":"en-US","name":"English","file":"en-US.js","dir":"ltr"}],
  localeCodes: ["es","en"],
  additionalMessages: [],
}

export const localeMessages = {
  'en-US.js': () => Promise.resolve(locale6010b66b),
  'es-ES.js': () => import('../..\\static\\lang\\es-ES.js' /* webpackChunkName: "lang-es-ES.js" */),
}
