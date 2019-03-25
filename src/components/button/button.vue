<template>
  <button class="e-button" @click="click" :class="{solid:type=='solid',stroke:type=='stroke',text:type=='text',small:type=='small',large:size=='large',middle:size=='middle',small:size=='small'}">
    <e-icon v-if="icon" :name="icon"></e-icon>
    <span><slot></slot></span>
  </button>
</template>
<script>
import Utils from '@utils'
export default {
  name: 'e-button',
  mixins: [Utils.zindex, Utils.emitter, Utils.popper, Utils.mixins],
  data () {
    return {}
  },
  config: {
    insert: {
      inner: false,
      before: true,
      after: true
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  },
  props: {
    type: {
      type: [String],
      name: '类型',
      desc: '按钮类型',
      default: 'solid',
      values: [
        {
          lab: '实体',
          val: 'solid'
        },
        {
          lab: '描边',
          val: 'stroke'
        },
        {
          lab: '文字',
          val: 'text'
        }
      ]
    },
    size: {
      type: [String],
      name: '大小',
      desc: '按钮大小',
      default: 'middle',
      values: [
        {
          lab: '大',
          val: 'large'
        },
        {
          lab: '中等',
          val: 'middle'
        },
        {
          lab: '小',
          val: 'small'
        }
      ]
    },
    label: {
      type: [String],
      name: '文本',
      desc: '按钮文本',
      default: ''
    },
    icon: {
      type: [String],
      name: '图标',
      desc: '图标',
      default: null
    }
  }
}
</script>
<style lang="less">
  @import '~@varcomcss';
  .e-button{
    display: inline-block;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0 20px;
    color: #fff;
    border-width: 1px;
    border-style: solid;
    text-align: center;
    border-radius: 2px;
    user-select: none;
    outline:none;
    &.stroke{
        color: var(--color-primary);
        background-color: #fff;
        border-color: var(--color-primary);

    }

    &.solid{
        color: #fff;
        background-color: #248bf2;
        border:none;
    }
    &.large{
        min-width: 120px;
        height: 48px;
        line-height: 46px;
        font-size: 18px;
    }
    &.middle{
        min-width: 80px;
        height: 36px;
        line-height: 34px;
        font-size: 14px;
    }
    &.small{
        min-width: 50px;
        height: 28px;
        line-height: 26px;
        font-size: 12px;
        padding: 0 10px;
    }
    &.text{
        min-width: auto !important;
        border: none;
        color: #248bf2;
        padding: 0 10px;
        background-color: transparent;
    }
}
</style>
