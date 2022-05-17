<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <div class="recharge">充电🔋</div>
    <ul>
      <li @click="$router.push('/First')">第一步</li>
      <li>第二步</li>
      <li>第三步</li>
    </ul>
    <div @click="$router.push('/SlideSwitch')">滑动切换预览</div>
    <div @click="$router.push('/DynamicComponent')">
       <h2>动态组件</h2>
       <!-- <p>---- ++++  ------</p>
       <div v-for="(value, key) in resData" :key="key" >
        <component :is="value.type"></component>
       </div> -->
    </div>

  </div>
</template>

<script>
import NextTick from '../Components/NextTick.vue'
import West from '../Components/West.vue'
import Info from '../Components/Info.vue'
export default {
  name: 'HelloWorld',
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
          type: 'info'
        },
        2: {
          type: 'west'
        },
        3: {
          type: 'info'
        },
        4: {
          type: 'tick'
        }
      },
      info: 'Info',
      west: 'West',
      tick: 'NextTick'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.recharge {
  font-size: 25px;
}
</style>
