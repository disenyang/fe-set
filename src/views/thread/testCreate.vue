<template>
  <section class="bgfff">
    <el-button @click="onBack">返回</el-button>
    <br>
    <br>
    {{msg.repeat(20)}}
  </section>
</template>

<script>
export default {
  name: 'testCreate',
  data () {
    return {
      msg: '这里是创建页面---'
    }
  },
  created () {
    console.log('testCreate')
  },
  methods: {
    onBack () {
      this.$store.dispatch('setTabViewName', ['follow', 'followThread'])
    }
  }
}
</script>

<style lang="less" scoped></style>
