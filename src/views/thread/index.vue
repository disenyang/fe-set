<template>
  <section class="bg-fff">
    <div class="loading-view"
         v-loading="loading"
         element-loading-text="拼命加载中"></div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import * as Code from '@configs/Code'
import { thread } from '@api/Base'

export default {
  name: 'threadIndex',
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
      let resData = await thread()
      this.loading = false
      if (resData.code === Code.SUCCESS) {
        let tabs = resData.items
        if (tabs && tabs instanceof Array) {
          this.$store.dispatch('setContentTabs', tabs)
          this.$router.push(
            this.refreshFixTab ? this.refreshFixTab : tabs[0].path
          )
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
