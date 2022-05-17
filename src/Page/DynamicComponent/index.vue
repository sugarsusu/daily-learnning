<template>
      <div>
       <h2>动态组件</h2>
       <p>---- ++++  ------</p>
       <div v-for="(value, key) in resData" :key="key" >
        <component :is="value.type"></component>
       </div>
    </div>
</template>

<script>
import NextTick from '../../Components/NextTick.vue'
import West from '../../Components/West.vue'
import Info from '../../Components/Info.vue'

export default {
  name: 'DynamicComponent',
  components: {
    NextTick,
    West,
    Info
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      resData: {
        1: {
          type: 'nextTick'
        },
        2: {
          type: 'west'
        },
        3: {
          type: 'info'
        },
        4: {
          type: 'nextTick'
        }
      },
      info: 'Info',
      west: 'West',
      nextTick: 'NextTick'
    }
  }
}
</script>

<style>

</style>
