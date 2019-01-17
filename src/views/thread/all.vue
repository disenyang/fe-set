<template>
  <section class="bgfff">
    {{msg.repeat(10)}}
  </section>
</template>

<script>
export default {
  name: 'allThread',
  data () {
    return {
      msg: '欢迎来到'
    }
  },
  created () { },
  methods: {}
}
</script>

<style lang="less" scoped></style>
