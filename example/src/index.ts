import 'animate.css/animate.css'
import '@/index.sass'

import './quasar'
import 'temp/dist/vue-front-lib.css'
import AppPage from '@/index.vue'
import Component from 'vue-class-component'
import ViewFrontLib from 'temp'
import Vue from 'vue'

Vue.use(ViewFrontLib)

Component.registerHooks(['beforeRouteEnter', 'beforeRouteLeave', 'beforeRouteUpdate'])

async function init() {
  new Vue({
    el: '#app',
    render: h => h(AppPage),
  })
}
init()
