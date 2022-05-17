<template>
  <div>
    <h1>Vue高级特性</h1>
    <!-- 自定义v-model -->
    <p>{{ name }}</p>
    <input v-model="name" />
    <h2>自定义v-model</h2>
    <CustomVmodel v-model="name" />

    <div>slot</div>
    <SlotDemo :url="website.url">
      {{website.title}}
    </SlotDemo>
  </div>
</template>

<script>
import CustomVmodel from './CustomVmodel'
import SlotDemo from './SlotDemo'

export default {
  components: {
    CustomVmodel,
    SlotDemo
  },
  data () {
    return {
      name: '哈哈哈',
      website: {
        url: 'http://imooc.com/',
        title: 'imooc',
        subTitle: '程序员的梦工厂'
      }
    }
  }
}
</script>
