<template>
  <section class="bgfff">{{msg.repeat(2000)}}</section>
</template>

<script>
export default {
  name: 'almostDoneThread',
  data () {
    return {
      msg: '欢迎来到almostDone'
    }
  },
  created () {
    console.log('缓存了么-----almostDoneThread')
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
