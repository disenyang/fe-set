<template>
  <section>
    <left-sidebar></left-sidebar>
    <section class="wrapper"
             :style="'width: '+clientWidth+'px;'">
      <main-header></main-header>

      <div :class="levelClass.contentBar"
           class="clearfix">
        <template>
          <content-tab v-if="level===2"
                       :contentTabs="contentTabs"
                       :menusType="menusType"
                       :clientHeight="clientHeight"></content-tab>
          <keep-alive :include="cachedViews">
            <router-view :key="key"
                         :class="levelClass.sidebarRouter"
                         :style="'height: '+clientHeight+'px;'"></router-view>
          </keep-alive>
        </template>
      </div>
    </section>
  </section>
</template>

<script>

export default {
  name: 'layout',
  components: {
  },
  data () {
    return {
      level: 1,
      menusType: 'common',
      levelClass: {
        contentBar: '',
        sidebarRouter: ''
      }
    }
  },
  created () {
    this.jumpRouter(this.$route)
    this.onresize()
  },
  watch: {
    $route (toRoute, fromRoute) {
      this.jumpRouter(toRoute)
    }
  },
  methods: {
    jumpRouter (router) {
      let match = router.matched[0]
      this.menusType = match.name
      let bool = match.meta.level && match.meta.level === 2
      if (bool) {
        this.level = match.meta.level
        this.levelClass.contentBar = 'content-sidebar'
        this.levelClass.sidebarRouter = 'content-sidebar-router'
        this.$store.dispatch('setResize')
      } else {
        this.level = 1
        this.levelClass.contentBar = 'content-wrapper'
        this.levelClass.sidebarRouter = 'content-wrapper-router'
        this.$store.dispatch('setResize', 75)
      }
    },
    onresize () {
      window.onresize = () => {
        this.$store.dispatch('setResize', this.level === 2 ? null : 75)
      }
    }
  },
  computed: {
  }
}
</script>

<style lang="less" scoped>

</style>
