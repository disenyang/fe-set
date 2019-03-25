<template>
  <aside class="e-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'EAside',

  componentName: 'EAside',

  props: {
    width: {
      type: String,
      default: '300px'
    }
  }
}
</script>
<style lang="less">
  @import '~@varcomcss';
  .e-aside{
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
  }
</style>
