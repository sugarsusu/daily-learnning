<template>
  <div>
    <p>我是info</p>
    <ul ref="ul1">
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      list: ['哈哈哈哈哈哈哈', 'b', 'c']
    }
  }
}
</script>
