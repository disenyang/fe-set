<template>
  <section class="e-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'EContainer',

  componentName: 'EContainer',

  props: {
    direction: String
  },

  computed: {
    isVertical () {
      if (this.direction === 'vertical') {
        return true
      } else if (this.direction === 'horizontal') {
        return false
      }
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag
          return tag === 'e-header' || tag === 'e-footer'
        })
        : false
    }
  }
}
</script>
<style lang="less">
  @import '~@varcomcss';
  .e-container{
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    &.is-vertical{
      flex-direction: column;
    }
  }
</style>
