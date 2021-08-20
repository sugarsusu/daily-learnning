import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/ReCharge/First'
import SlideSwitch from '@/components/Mask/SlideSwitch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/First',
      name: 'First',
      component: First
    },
    {
      path: '/SlideSwitch',
      name: 'SlideSwitch',
      component: SlideSwitch
    }
  ]
})
