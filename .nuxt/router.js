import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _41deb521 = () => interopDefault(import('..\\pages\\company\\index.vue' /* webpackChunkName: "pages_company_index" */))
const _d5ba173a = () => interopDefault(import('..\\pages\\contacts\\index.vue' /* webpackChunkName: "pages_contacts_index" */))
const _5112874d = () => interopDefault(import('..\\pages\\en\\index.vue' /* webpackChunkName: "pages_en_index" */))
const _255aaa76 = () => interopDefault(import('..\\pages\\portfolio\\index.vue' /* webpackChunkName: "pages_portfolio_index" */))
const _642087ef = () => interopDefault(import('..\\pages\\process\\index.vue' /* webpackChunkName: "pages_process_index" */))
const _d8f5166c = () => interopDefault(import('..\\pages\\en\\company\\index.vue' /* webpackChunkName: "pages_en_company_index" */))
const _785429da = () => interopDefault(import('..\\pages\\en\\contacts\\index.vue' /* webpackChunkName: "pages_en_contacts_index" */))
const _af5fb842 = () => interopDefault(import('..\\pages\\en\\portfolio\\index.vue' /* webpackChunkName: "pages_en_portfolio_index" */))
const _090b8dd4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/company",
      component: _41deb521,
      name: "company"
    }, {
      path: "/contacts",
      component: _d5ba173a,
      name: "contacts"
    }, {
      path: "/en",
      component: _5112874d,
      name: "en"
    }, {
      path: "/portfolio",
      component: _255aaa76,
      name: "portfolio"
    }, {
      path: "/process",
      component: _642087ef,
      name: "process"
    }, {
      path: "/en/company",
      component: _d8f5166c,
      name: "en-company"
    }, {
      path: "/en/contacts",
      component: _785429da,
      name: "en-contacts"
    }, {
      path: "/en/portfolio",
      component: _af5fb842,
      name: "en-portfolio"
    }, {
      path: "/",
      component: _090b8dd4,
      name: "index"
    }],

    fallback: false
  })
}
