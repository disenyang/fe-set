<template>
  <section class="app-wrapper">
    <navigation class="app-nav" :menus="menus"></navigation>
    <section class="app-main">
      <keep-alive :include="cachedViews">
        <router-view :key="key"></router-view>
      </keep-alive>
    </section>
  </section>
</template>

<script>
import menus from '@/configs/menu.js'
import Navigation from './components/navigation'

export default {
  name: 'Layout',
  components: {
    Navigation
  },
  data () {
    return {
      menus: menus
    }
  },
  created () {
  },
  watch: {
  },
  methods: {
  },
  computed: {
    cachedViews () {
      return []
    },
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="less" scoped>
.app-wrapper{
  width: 100%;
  height: 100%;
  .app-nav{
    position: fixed;
    left:20px;
    right: 20px;
    top: 0px;
  }
  .app-main{
    margin-top: 60px;
    height: calc(100% - 80px);
  }
}
</style>
