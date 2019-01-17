<template>
  <section class="error-401">
    <h1>401</h1>
    <p>很抱歉!你没权限访问</p>
  </section>
</template>
<script>
export default {
  name: 'page401',
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
.error-401 {
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
