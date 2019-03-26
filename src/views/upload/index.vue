<template>
  <section class="p-upload">
    <e-container>
        <e-aside width="40%">
          <e-row>
            <e-col span="4">
                名称：
            </e-col>
            <e-col span="3">
                <e-input v-model="component.name"></e-input>
            </e-col>
            <e-col span="4">
                英文名称：
            </e-col>
            <e-col span="3">
                <e-input v-model="component.enname"></e-input>
            </e-col>
            <e-col span="4">
                图标：
            </e-col>
            <e-col span="3">
                <e-img :src="component.icon"></e-img>
            </e-col>
          </e-row>
        </e-aside>
        <e-main>
          <e-container>
            <e-header height="auto">
              <div class="tabbar">
                  <div class="tab" @click="selTab=1" :class="{selected:selTab==1}">
                      代码
                  </div>
                  <div class="tab" @click="selTab=2" :class="{selected:selTab==2}">
                      <div class="title">文档md</div>
                      <div class="runtest-btn" v-if="selTab==4" @click="runTest()"></div>
                  </div>
              </div>
            </e-header>
            <e-main>
              <codemirror v-if="selTab==1"
                  :value="component.jscode"
                  :options="jsEditorOption"
                  ref="jsEditor"
                  style="height:100%"
                  @change="jscodeChange">
              </codemirror>
              <codemirror v-if="selTab==2"
                :value="component.mdcode"
                :options="mdEditorOption"
                ref="testEditor"
                style="height:100%"
                @change="mdcodeChange">
              </codemirror>
            </e-main>
            <e-footer style="padding:10px 0px">
              <e-button @click="save">保存</e-button>
            </e-footer>
          </e-container>
        </e-main>
    </e-container>
  </section>
</template>

<script>

import Vue from 'vue'
import * as Component from '@api/Component'

const codemirror = require('vue-codemirror-lite')
Vue.use(codemirror)

require('codemirror/mode/css/css')
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/htmlmixed/htmlmixed')
require('codemirror/mode/xml/xml')

require('codemirror/addon/hint/show-hint.js')
require('codemirror/addon/hint/show-hint.css')
require('codemirror/addon/hint/javascript-hint.js')

require('codemirror/addon/hint/xml-hint.js')
require('codemirror/addon/hint/html-hint.js')
require('codemirror/addon/hint/css-hint.js')
require('codemirror/keymap/sublime.js')

require('codemirror/theme/dracula.css')

export default {
  name: 'upload',
  components: {
  },
  data () {
    return {
      selTab: 1,
      component: {
        jscode: 'let a = 1',
        mdcode: '',
        name: '',
        enname: ''
      },
      mdEditorOption: {
        mode: 'text/html',
        theme: 'dracula',
        lineNumbers: true,
        indentUnit: 2,
        keyMap: 'sublime',
        autoCloseBrackets: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        extraKeys: {
          "'c'": (cm, pred) => {
            return this.complete(cm, pred)
          },
          "'r'": (cm, pred) => {
            return this.complete(cm, pred)
          },
          'Cmd-Enter': 'autocomplete',
          'Tab': (cm) => {
            this.tabKeyDeal(cm)
          }
        }
      },
      jsEditorOption: {
        mode: 'javascript',
        theme: 'dracula',
        lineNumbers: true,
        indentUnit: 2,
        keyMap: 'sublime',
        autoCloseBrackets: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        extraKeys: {
          "'c'": (cm, pred) => {
            return this.complete(cm, pred)
          },
          "'r'": (cm, pred) => {
            return this.complete(cm, pred)
          },
          'Cmd-Enter': 'autocomplete',
          'Tab': (cm) => {
            this.tabKeyDeal(cm)
          }
        }
      }
    }
  },
  computed: {

  },
  watch: {

  },
  filters: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    // 获取详情
    getDetail () {
      this.yiiLoading.show()
      this.$http.post('/casion/basiccom/get', {
        id: this.$route.params.id
      }).then((response) => {
        this.basiccom = response.data.data ? response.data.data : {}
        this.getBasiccomco(this.basiccom.coid, () => {
          this.init()
        })
      })
    },

    jscodeChange () {
      let editor = this.$refs.jsEditor.editor
      this.jscode = editor.getValue()
    },
    mdcodeChange () {
      let editor = this.$refs.testEditor.editor
      this.mdcode = editor.getValue()
    },
    save () {
      let params = {...this.component,
        coid: '33a91785a545d263ddfbac581a2e0b84',
        createuser: '343706ca20ab92f6e44ea97e091d964c'
      }
      Component.save(params).then(res => {
        console.log('res', res)
        // if (res.code === Code.SUCCESS) {
        //   this.cspData = res.items.list
        //   this.total = res.items.total
        //   this.loading = false
        // } else {
        //   this.$message({ message: res.message, type: 'error' })
        //   this.loading = false
        // }
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less">
.p-upload{
  box-sizing: border-box;
  background-color: #eee;
  padding: 10px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  .e-col{
    height: 40px;
    line-height: 40px;
    padding: 0px 10px;
  }
  .e-container{
    height: 100%;
  }
  .CodeMirror{
    height: 100%;
    font-size: 17px;
    line-height: 20px;
  }
  .tabbar{
    line-height: 30px;
    height: 30px;
    display: flex;
    .tab{
      color: #333;
      font-size: 15px;
      padding: 0px 10px;
      cursor: pointer;
      white-space: nowrap;
      .title{
          display: inline-block;
      }
      .runtest-btn{
          margin-left: 5px;
          width: 30px;
          height: 30px;
          vertical-align: top;
          display: inline-block;
          vertical-align: top;
          background-image:url('~@img/run.png');
          background-size: 20px 20px;
          background-repeat: no-repeat;
          background-position: center center;
      }

      &.selected{
          background: #333;
          color: #fff;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
      }
    }
  }

}
</style>
