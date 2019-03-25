<template>
    <div class="c-demo-box"
        :class="[
            type ? `c-demo-box-${type}` : ''
        ]">
        <div>
            <div :span="exampleSpan">
                <div class="c-demo-box-example">
                    <div class="example">
                        <slot name="example"></slot>
                    </div>
                    <div class="desc">
                        <div class="title"><slot name="title"></slot></div>
                        <div class="detail">
                            <slot name="desc"></slot>
                        </div>
                    </div>
                </div>
            </div>
            <div :span="codeSpan" :style="{height: codeHeight}">
              <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default{
  name: 'DemoBox',

  props: {
    type: String
  },

  data () {
    return {
      codeHeight: 'auto'
    }
  },
  computed: {
    exampleSpan () {
      return this.type === 'vertical' ? 24 : 10
    },
    codeSpan () {
      return this.type === 'vertical' ? 24 : 14
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.codeHeight = Math.max(this.$refs.codeview.getInnerSize().sh, this.$el.clientHeight) + 'px'
      this.$refs.codeview.viewResize()
    })
  }
}
</script>

<style lang="less">

    .c-demo-box{
        margin-bottom: 20px;
        border: 1px solid #cfdee6;
        border-radius: 4px;
        transition: box-shadow .3s;

        &:hover{
            box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
        }

        &.c-demo-box-vertical{

            .c-demo-box-code{
                height: 100%;
                border-left: none;
                border-top: 1px dashed #cfdee6;
            }
        }

        .c-demo-box-example{
            padding: 40px 0;
            height: 100%;

            .example{
                padding: 0 20px 40px;
                border-bottom: 1px solid #cfdee6;
            }

            .desc{
                padding: 20px 20px 0;
                position: relative;

                .title{
                    position: absolute;
                    top: -10px;
                    left: 10px;
                    padding: 0 10px;
                    background-color: #fff;
                    font-size: 14px;
                    line-height: 20px;
                    font-weight: 600;
                }

                .detail{

                    font-size: 12px;
                    line-height: 24px;

                    p{
                        text-indent: 2em;
                        margin: 10px 0;
                    }

                    ul{
                        padding-left: 2em;
                        margin: 10px 0;
                    }
                }
            }

        }

        .c-demo-box-code{
            height: 100%;
            border-left: 1px dashed #cfdee6;
            background-color: #f9fafc;
            // overflow-x: scroll;

            pre{
                padding: 10px 15px;
            }

            pre code{
                display: block;
                padding: 10px 15px;
                color: rgba(0, 0, 0, .65);
                font-family: Lucida Console,Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
                font-size: 12px;
                background-color: #f9fafc;
            }
            code{
                margin: 0px;
                padding: 0px;
                border-radius: 0px;
            }
        }
    }
</style>
