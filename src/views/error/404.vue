<template>
  <section class="error-404">
    <h1>404</h1>
    <p>很抱歉!你访问的页面不存在</p>
  </section>
</template>
<script>
export default {
  name: 'page404',
  components: {},
  data () {
    return {}
  },
  created () { },
  methods: {
    testFun () { }
  }
}
</script>

<style lang="less" scoped>
.error-404 {
  height: calc(90vh);
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 15%;
    font-size: 60px;
    color: #e6a23c;
    font-style: italic;
    font-weight: bold;
  }
  p {
    font-size: 24px;
    color: #909399;
  }
}
</style>
