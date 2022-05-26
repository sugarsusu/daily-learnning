<template>
  <div>
    <p> {{name}} {{major}} {{city}}</p>
    <button @click="showName"> 显示姓名</button>
  </div>
</template>

<script>
export default {
  // mixins: [MyMixin], // 可以添加多个，会自动合并
  data () {
    return {
      name: '名字',
      major: '职位'
    }
  },
  methods: {

  },
  mounted () {
    console.log('component mounted', this.name)
  }
}
</script>

<style>
</style>
