<template>
  <!-- 例如： vue颜色选择 -->
  <input
    type="text"
    :value="text1"
    @input="$emit('change1', $event.target.value)"
  />
  <!--
    上面的input使用了：value 而不是v-model
    上面的change 和model.event 要对应起来
    text1 属性要对应起来
   -->
</template>

<script>
export default {
  model: {
    prop: 'text1', // 对应props里的text
    event: 'change1'
  },
  props: {
    text: String,
    default () {
      return ''
    }
  }
}
</script>
