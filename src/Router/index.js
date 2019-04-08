import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home.vue'
import Input from '@/components/pages/Input.vue'
import Output from '@/components/pages/Output.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Input',
      name: 'Input',
      component: Input
    },
    {
      path: '/Output',
      name: 'Output',
      component: Output
    }
  ]
})