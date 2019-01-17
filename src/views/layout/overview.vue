<template>
  <section>
    <div class="loading-view"
         v-loading="loading"
         element-loading-text="拼命加载中"></div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import * as Code from '@configs/Code'
import { thread, setFlag } from '@api/Base'

export default {
  name: 'overview',
  data () {
    return {
      loading: false
    }
  },
  created () {
    this.getConterntTab()
  },
  methods: {
    async getConterntTab () {
      let redirect = this.$route.redirectedFrom
      if (!redirect) return false
      let resData = null
      this.loading = true
      // set content menus area
      if (redirect === '/thread') {
        resData = await thread()
      } else if (redirect === '/set') {
        resData = await setFlag()
      }
      this.loading = false
      if (resData.code === Code.SUCCESS) {
        let tabs = resData.items
        if (tabs && tabs instanceof Array) {
          this.$store.dispatch('setContentTabs', tabs)

          let children = tabs[0].children
          let path = ''
          if (children && children instanceof Array && children.length > 0) {
            path = this.refreshFixTab ? this.refreshFixTab : children[0].path
          } else {
            path = this.refreshFixTab ? this.refreshFixTab : tabs[0].path
          }
          this.$router.push(path)
        }
      } else {
        console.log('getConterntTab 发生错误!')
      }
    }
  },
  computed: {
    ...mapGetters({
      refreshFixTab: 'refreshFixTab'
    })
  }
}
</script>

<style lang="less" scope>
.loading-view {
  height: 100%;
}
</style>
