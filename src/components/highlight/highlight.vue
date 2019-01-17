<template>
  <section>
    <div class="menus-drop-down"
         v-for="(item,index) in contentTabs"
         :key="index">
      <span class="title">{{item.name}}</span>
      <ul>
        <router-link v-for="(item,index) in item.children"
                     :key="index"
                     tag="li"
                     :to="openTab(item.path)"
                     activeClass="active">
          <span class="span-tab">{{item.name}}</span>
        </router-link>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  name: 'JyHighlight',
  props: {
  },
  components: {
  },
  data () {
    return {
      loading: false
    }
  },
  created () { },
  methods: {
  }
}
</script>

<style lang="less" scope>
.menus-drop-down {
  padding-left: 20px;
  .title {
    color: #333;
  }
  ul {
    margin: 10px 0;
    .span-tab {
      color: #666;
    }
  }
}
.menus-drop-down {
  &.ul {
    li {
      margin: 0 10px;
      cursor: pointer;
      color: #333;
      margin-top: 5px;
      line-height: 30px;
      &:hover {
        .span-tab {
          color: #2f9cf0;
        }
      }
      .span-tab {
        display: block;
        padding-left: 20px;
      }
    }
    li.active {
      .span-tab {
        background-color: #e9f6ff;
        color: #2f9cf0;
      }
    }
  }
}
</style>
