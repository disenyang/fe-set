<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default{
  name: 'App'
}
</script>

<style lang="less">
html{
  width: 100%;
  height: 100%;
  font-size: 15px;
  body{
    width: 100%;
    height: 100%;
    #app{
      height: 100%;
      padding:0px 20px;
    }
  }
}
</style>
