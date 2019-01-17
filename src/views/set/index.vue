<template>
  <section class="bgfff">
    <div class="loading-view"
         v-loading="loading"
         element-loading-text="拼命加载中"></div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import * as Code from '@configs/Code'
import { setFlag } from '@api/Base'

export default {
  name: 'setIndex',
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

      this.loading = true
      let resData = await setFlag()
      this.loading = false
      if (resData.code === Code.SUCCESS) {
        let tabs = resData.items
        if (tabs && tabs instanceof Array) {
          this.$store.dispatch('setContentTabs', tabs)

          let children = tabs[0].children
          let path = this.refreshFixTab ? this.refreshFixTab : children[0].path
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
