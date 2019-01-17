<template>
  <component :is="viewName"
             v-if="viewName === 'testCreate'"></component>
  <section class="bgfff"
           v-else>
    <el-button type="primary"
               @click="onCreate">新建</el-button>
    <br>
    {{msg.repeat(2000)}}
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import TestCreate from '@views/thread/testCreate'
export default {
  name: 'followThread',
  components: {
    TestCreate
  },
  data () {
    return {
      msg: '欢迎来到follow欢迎来到follow欢迎来到follow欢迎来到follow'
    }
  },
  created () {
    console.log('followThread')
  },
  methods: {
    onCreate () {
      this.$store.dispatch('setTabViewName', ['follow', 'testCreate'])
    }
  },
  computed: {
    ...mapGetters({
      viewName: 'followViewName'
    })
  }
}
</script>

<style lang="less" scoped></style>
