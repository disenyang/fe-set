<template>
  <section class="e-navigation" :class="{'home':home,'other':!home}">
    <a class="main-left" href="/">
      <div class="icon">
        <img src="http://u.xiaowanwu.cn/toolkit.svg">
      </div>
      <div class="title c-main ml5">
        大前端统一开发平台
      </div>
    </a>
    <div class="main-right">
      <div class="menus" :class="{'home':home,'other':!home}">
        <div class="menu-item" :class="{'home-selected':home && menu.selected,'other-selected':!home && menu.selected}" :key="index" v-for="(menu,index) in menus" @click="clickMenu(menu)">{{menu.name}}</div>
      </div>
      <div class="usercenter ml20">
        <a href="/">
          <img :src="user.headimg || defaultHeadimg">
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import Utils from '@utils'
export default {
  name: 'Navigation',
  mixins: [Utils.zindex, Utils.emitter, Utils.popper, Utils.mixins],
  data () {
    return {
      defaultHeadimg: 'http://u.xiaowanwu.cn/DEC16B87-5206-40E0-BB7D-D02C11A84553',
      // 首页
      menus: [
        {
          name: '首页',
          path: '/home',
          selected: false
        },
        {
          name: '组件',
          path: '/components',
          selected: false
        },
        {
          name: '开发',
          path: '/components',
          selected: false
        }
      ]
    }
  },
  config: {
    insert: {
      inner: false,
      before: true,
      after: true
    }
  },
  computed: {
    home () {
      return this.$route.fullPath.includes('/home')
    },
    user () {
      return {}
    }
  },
  created () {
    this.menus.forEach(menu => {
      menu.selected = this.$route.fullPath.includes(menu.path)
    })
  },
  methods: {
    clickMenu (menu) {
      this.$router.push({ path: menu.path })
      this.menus.forEach(m => {
        m.selected = m === menu
      })
    }
  }
}
</script>
<style lang="less">
@import '~@varcss';

.e-navigation {
  display: flex;
  height: 60px;
  &.other{
    box-shadow: 0 2px 8px #f0f1f2;
  }
  .main-left{
    flex: 1;
    display: flex;
    .icon{
      img{
        width:60px;
      }
    }
    .title{
      line-height: 60px;
      font-weight: bold;
      font-size: 17px;
    }
  }
  .main-right{
    display: flex;
    .menus{
      display: flex;
      &.home{
        color: #cccccc;
      }
      &.other{
        color: @theme-light;
      }
      .menu-item{
        line-height: 60px;
        margin: 0px 20px;
        cursor: pointer;
        &.home-selected{
          border-bottom:2px solid #ffffff;
          color: #ffffff;
        }
        &.other-selected{
          border-bottom:2px solid @theme;
          color:@theme;
        }
      }
    }
    .usercenter{
      display: flex;
      align-items: center;
      color: #0f0c0c;
      img{
        width:25px;
        border-radius: 5px;
      }
      a{
        vertical-align: top;
      }
    }
  }
}
</style>
