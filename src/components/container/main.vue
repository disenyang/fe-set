<template>
  <main class="e-main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'EMain',
  componentName: 'EMain'
}
</script>
<style lang="less">
  @import '~@varcomcss';
  .e-main{
    // IE11 supports the <main> element partially https://caniuse.com/#search=main
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
  }
</style>
