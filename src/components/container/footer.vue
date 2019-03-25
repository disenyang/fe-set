<template>
  <footer class="e-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'EFooter',

  componentName: 'EFooter',

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
  .e-footer{
    box-sizing: border-box;
    flex-shrink: 0;
  }
</style>
