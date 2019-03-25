<template>
  <header class="e-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'EHeader',

  componentName: 'EHeader',

  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>
<style lang="less">
  @import '~@varcomcss';
  .e-header{
    box-sizing: border-box;
    flex-shrink: 0;
  }
</style>
