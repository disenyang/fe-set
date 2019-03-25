<template>
  <section class="components-wrapper">
    <e-container>
      <e-aside width="200px">
        <e-container>
          <e-header height="auto" style="padding:20px 0 0 0">
            <e-button @click="uploadComponent()">我要上传</e-button>
          </e-header>
          <e-main>
            <!-- 侧边栏 -->
            <menubar class="components-sidebar" :menus="menus"></menubar>
          </e-main>
        </e-container>
      </e-aside>
      <e-main>
          <section class="components-main">
            <router-view :key="key"></router-view>
          </section>
      </e-main>
    </e-container>
  </section>
</template>

<script>
import menus from '@/configs/menu.js'
import Menubar from './components/menubar'

export default {
  name: 'Layout',
  components: {
    Menubar
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
    uploadComponent () {
      this.$router.push({name: 'upload'})
    }
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

<style lang="less">
.components-wrapper{
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  .components-sidebar{
    width: 200px;
    height: 100%;
    overflow: auto;
  }
  .components-main{
    flex: 1;
    padding:10px 20px;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    line-height: 1.8;
    overflow: auto;
    code{
      line-height: 1.8;
      font-size: 14px;
      padding: 18px 24px;
      background-color: #fafafa;
      border: 1px solid #eaeefb;
      margin-bottom: 25px;
      border-radius: 4px;
      -webkit-font-smoothing: auto;
      display: block;
      overflow-x: auto;
      color: #000;
    }
    pre{
      display: block;
      font-family: monospace;
      white-space: pre;
      margin: 1em 0px;
    }
    h1{
        font-size: 28px;
        color: rgba(0,0,0,.85);
        font-weight: 500;
        line-height: 40px;
        margin-bottom: 24px;
        margin-top: 8px;
        font-family: Lato,Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
    }

    h2{
        font-size: 22px;
        color: rgba(0,0,0,.85);
        font-family: Lato,Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
        margin: 1.6em 0 .6em;
        font-weight: 500;
        clear: both;
        line-height: 40px;
    }
    h3{
      font-weight: 400;
      color: #1f2f3d;
      margin: 55px 0 20px;
    }
    p{
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
    }

    table{
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        font-size: 14px;

        th{
            border-bottom: 1px solid rgba(34,36,38,.1);
            color: #333;
            text-align: left;
            line-height: 16px;
            width: 1px;
            padding: 15px 20px;
            white-space: nowrap;
            background-color: #eff2f7;

            &:last-child{
                width: auto;
            }
        }

        td{
            border-bottom: 1px solid rgba(34,36,38,.1);
            color: #666;
            width: 1px;
            line-height: 16px;
            padding: 15px 20px;
            white-space: nowrap;

            &:last-child{
                width: auto;
            }
        }

        tr{
            &:last-child{
                td{

                }
            }
        }
    }
  }
}
</style>
