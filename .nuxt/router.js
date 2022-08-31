import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _18e3c80e = () => interopDefault(import('..\\pages\\blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _2e244f6a = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _5f3da0c8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _cbee5a9a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _5efd17ac = () => interopDefault(import('..\\pages\\Privacy-terms.vue' /* webpackChunkName: "pages/Privacy-terms" */))
const _31df356e = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blank-page",
    component: _18e3c80e,
    name: "blank-page___en"
  }, {
    path: "/contact",
    component: _2e244f6a,
    name: "contact___en"
  }, {
    path: "/es",
    component: _5f3da0c8,
    name: "index___es"
  }, {
    path: "/login",
    component: _cbee5a9a,
    name: "login___en"
  }, {
    path: "/Privacy-terms",
    component: _5efd17ac,
    name: "Privacy-terms___en"
  }, {
    path: "/register",
    component: _31df356e,
    name: "register___en"
  }, {
    path: "/es/blank-page",
    component: _18e3c80e,
    name: "blank-page___es"
  }, {
    path: "/es/contact",
    component: _2e244f6a,
    name: "contact___es"
  }, {
    path: "/es/login",
    component: _cbee5a9a,
    name: "login___es"
  }, {
    path: "/es/Privacy-terms",
    component: _5efd17ac,
    name: "Privacy-terms___es"
  }, {
    path: "/es/register",
    component: _31df356e,
    name: "register___es"
  }, {
    path: "/",
    component: _5f3da0c8,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
