import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  fas as freeFasFas
} from '@fortawesome/free-solid-svg-icons'

import {
  fab as freeFabFab
} from '@fortawesome/free-brands-svg-icons'

library.add(
  freeFasFas,
  freeFabFab
)

config.autoAddCss = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-iconLayers', FontAwesomeLayers)
Vue.component('font-awesome-iconLayersText', FontAwesomeLayersText)
