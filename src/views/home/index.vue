<template>
  <section class="home">
    <div class="main-left">
      <div class="name c-main">
        fe-set
      </div>
      <div class="desc">
        致力于打造前端一体化的开发平台，包括组件管理，模版管理，脚本管理。这是一款前端团队高效协作的平台，可以清楚的查看组件的开发人员、修改人员以及问题处理。
      </div>
      <div class="btns mt20">
        <div class="btn" @click="startUse()">
          开始使用
        </div>
        <div class="btn-git ml20">
          <a href="https://github.com/disenyang/fe-set" target="new">git代码</a>
        </div>
      </div>
    </div>
    <div class="main-right">
      <img src="http://u.xiaowanwu.cn/feset1.gif">
    </div>
    <div class="bg-img">
    </div>
  </section>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
    }
  },
  created () {
    console.log('这里是首页')
  },
  methods: {
    startUse () {
      this.$router.push({path: '/components'})
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/flex";
.home{
  display: flex;
  width: 1000px;
  margin: auto;
  height: 100%;
  .bg-img{
    position:absolute;
    left: 50%;
    top: -10%;
    bottom: -30%;
    right: -20%;
    background-color: #6666ff;
    z-index: -1;
    transform: rotate(20deg)
  }
  .main-left{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .name{
      line-height: 150px;
      font-size: 80px;
    }
    .desc{
      line-height: 30px;
      font-size: 20px;
    }
    .btns{
      display: flex;
      flex-direction: row;

      .btn{
        padding:0px 50px;
        line-height: 50px;
        text-align: center;
        background-color: #3333ff;
        border-radius: 25px;
        cursor: pointer;
        color: #fff;
      }
      .btn-git{
        padding:0px 50px;
        line-height: 50px;
        text-align: center;
        color: #3333ff;
        border:1px solid #3333ff;
        border-radius: 25px;
        cursor: pointer;
      }
    }
  }
  .main-right{
    margin-left: 100px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 400px;
    }
  }
}
</style>
