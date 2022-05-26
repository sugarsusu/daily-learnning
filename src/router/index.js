import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/Page/HelloWorld'
import First from '@/Page/ReCharge/First'
import SlideSwitch from '@/Page/Mask/SlideSwitch'
import EventButton from '@/Page/EventButton/index'
import AdvancedUse from '@/Page/AdvancedUse/index'
import DynamicComponent from '@/Page/DynamicComponent/index'
import Demo from '@/Page/DynamicComponent/Demo'

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
    },
    {
      path: '/EventButton',
      name: 'EventButton',
      component: EventButton
    },
    {
      path: '/AdvancedUse',
      name: 'AdvancedUse',
      component: AdvancedUse
    },
    {
      path: '/DynamicComponent',
      name: 'DynamicComponent',
      component: DynamicComponent
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
