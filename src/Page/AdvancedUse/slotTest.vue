
<template>

  <div>
    <header>
      <slot></slot>
    </header>
    <!-- <template v-slot:header></template> -->
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot></slot>
    </footer>
  </div>
</template>
// slot具名插槽
<script>
export default {

}
</script>

<style>

</style>
