
<template>
  <div class="e-input">
    <input class="e-input-input"
    :type="type" :class="{error:error}"
    ref="el" :placeholder="placeholder"
    :value="value" @input="elInputHandler"
    @mouseenter="elMouseenterHandler"
    @mouseleave="elMouseleaveHandler"
    @mouseover="elMouseoverHandler"
    @mouseout="elMouseoutHandler"
    @dblclick="elDblclickHandler">
    <div class="count-length">
        <span v-if="counter=='true'||counter===true">{{counterValue}}</span>
        <span v-if="(counter=='true'||counter===true) && maxLength">/</span>
        <span v-if="maxLength">{{maxLength}}</span>
    </div>
</div>
</template>
<script>
import Utils from '@utils'
export default {
  name: 'e-input',
  mixins: [Utils.zindex, Utils.emitter, Utils.popper, Utils.mixins],
  data () {
    return {
      counterValue: '0'
    }
  },
  config: {
    insert: {
      inner: false,
      before: true,
      after: true
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (newVal, oldValue) {
        this.$emit('change', this.value)
      }
    }
  },
  created () {
    this.dispatch('e-form', 'e.form.addField', this)
    this.counterValue = this.value.length
  },
  methods: {
    elInputHandler (e) {
      if (e.target.composing) {
        return
      }
      let val = e.target.value

      let counterValue = val.length
      if (this.maxLength) {
        if (counterValue > this.maxLength) {
          val = val.substring(0, this.maxLength)
          e.target.value = val
        } else {

        }
      } else {

      }
      this.$emit('input', val)
      this.counterValue = val.length
    },
    elFocusHandler (e) {
      this.$emit('focus', e)
    },
    elBlurHandler (e) {
      this.$emit('blur', e)
    },
    elDblclickHandler (e) {
      this.$emit('dblclick', e)
    },
    elClickHandler (e) {
      this.$emit('click', e)
    },
    elMouseoverHandler (e) {
      this.$emit('mouseover', e)
    },
    elMouseoutHandler (e) {
      this.$emit('mouseout', e)
    },
    elMouseenterHandler (e) {
      this.$emit('mouseenter', e)
    },
    elMouseleaveHandler (e) {
      this.$emit('mouseleave', e)
    }
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    inType: {
      type: String,
      default: 'string',
      name: '数据类型',
      desc: '输入框的类型，int,string,number,natural,negative等',
      values: [
        {
          lab: '整数',
          val: 'int'
        },
        {
          lab: '文本',
          val: 'string'
        },
        {
          lab: '小数',
          val: 'float'
        },
        {
          lab: '非负整数',
          val: 'natural'
        },
        {
          lab: '负数',
          val: 'negative'
        },
        {
          lab: 'qq号',
          val: 'qq'
        },
        {
          lab: '邮箱地址',
          val: 'email'
        },
        {
          lab: '手机号',
          val: 'mobile'
        },
        {
          lab: '固定电话',
          val: 'phone'
        },
        {
          lab: '身份证',
          val: 'idcard'
        },
        {
          lab: '正则表达式',
          val: 'regular'
        }
      ]
    },
    formRule: {
      type: String,
      name: '表单规则',
      desc: '表单规则'
    },
    minLength: {
      type: Number,
      name: '最小长度',
      desc: '最小长度'
    },
    maxLength: {
      type: Number,
      name: '最大长度',
      desc: '最大长度'
    },
    minValue: {
      type: Number,
      name: '最小值',
      desc: '最小值'
    },
    maxValue: {
      type: Number,
      name: '最大值',
      desc: '最大值'
    },
    counter: {
      type: Boolean,
      name: '字符计数',
      desc: '字符计数',
      default: false
    },
    placeholder: {
      type: String,
      name: '提示信息',
      desc: '提示信息'
    },
    error: {
      type: Boolean,
      name: '错误',
      default: false,
      desc: '错误'
    },
    'type': {
      type: String,
      name: '输入类型',
      default: 'text',
      desc: '类型',
      values: [
        {
          lab: '文本',
          val: 'text'
        },
        {
          lab: '密码',
          val: 'password'
        }
      ]
    }
  }
}
</script>
<style lang="less">
  @import '~@varcomcss';
  .e-input{
    display:inline-block;
    height:36px;
    width: 100%;
    line-height:36px;
    outline:none;
    box-sizing:border-box;
    padding: 0;
    position:relative;

    .e-input-input{
        width:100%;
        border:@border-common;
        margin:0px;
        padding: 0 10px;
        height:36px;
        line-height:36px;
        outline:none;
        transition:0.3s linear;
        box-sizing:border-box;
        border-radius:2px;
        color:@color-font;
        appearance:none;
        &:hover{
            border-color:@color-border-hover;
            box-shadow: @box-shadow-hover-common;
        }
        &.error{
            border-color:@color-red;
        }
    }
    .count-length{
        position:absolute;
        right:1px;
        font-size:12px;
        color:#888;
        padding:0 10px;
        top:1px;
        bottom:1px;
    }

}
</style>
