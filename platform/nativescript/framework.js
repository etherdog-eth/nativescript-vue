console.keys = function(object) {
  console.dir(Object.keys(object))
}

// This is required because some of the third party plugins rely on this
// and cause errors since there is no process variable in {N}.
global.process = global.process || {}
global.process.env = global.process.env || {}

import Vue from './runtime/index'
import ModalPlugin from './modal-plugin'
import NavigatorPlugin from './navigator-plugin'
import DecoderPlugin from './decoder-plugin'
import RouterPlugin from './router-plugin'

Vue.use(ModalPlugin)
Vue.use(NavigatorPlugin)
Vue.use(DecoderPlugin)
Vue.use(RouterPlugin)

export default Vue
