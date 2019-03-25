<template>
  <div class="e-nav" :class="[direction]">
    <div class="item" :key="item.path" v-for="item in navs">
      <div class="item-wrapper" @click="clickItem(item)" :class="{selected:item==selectedItem}">
          <div class="icon"><img :src="item.icon"></div>
          <div class="name">{{item.name}}</div>
          <div class="item-expand-icon" v-show="item.children && item.children.length!=0" :class="{action:item.showChildren}"></div>
      </div>
      <div class="item-children" :style="{height:(item.children&& item.showChildren?item.children.length*60:0)+'px'}" >
        <!-- 二级 -->
        <div class="item" :key="item2.path" v-for="item2 in item.children">
          <div class="item-wrapper" @click="clickItem(item2)" :class="{selected:item2==selectedItem}">
            <div class="icon"><img :src="item2.icon"></div>
            <div class="name">{{item2.name}}</div>
          </div>
          <div class="item2-children" :style="{height:(item2.children&& item2.showChildren?item2.children.length*60:0)+'px'}">
            <!-- 三级 -->
            <div class="item" :key="item3.path" v-for="item3 in item2.children">
              <div class="item-wrapper" @click="clickItem(item3)" :class="{selected:item3==selectedItem}">
                <div class="icon"><img :src="item3.icon"></div>
                <div class="name">{{item3.name}}</div>
              </div>
              <div class="item-children" :style="{height:(item3.children&& item3.showChildren?item3.children.length*60:0)+'px'}">
              </div>
          </div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>
<script>
import Utils from '@utils'
export default {
  name: 'FNav',
  mixins: [Utils.zindex, Utils.emitter, Utils.popper, Utils.mixins],
  data () {
    return {
      selectedItem: null
    }
  },
  config: {
    insert: {
      inner: false,
      before: true,
      after: true
    }
  },
  computed: {},
  created () {
  },
  methods: {
    clickItem (item) {
      if (item.url) {
        this.$router.push({ path: item.url })
      } else {
        item.showChildren = !item.showChildren
      }

      this.selectedItem = item
    }
  },
  props: {
    direction: {
      type: [String],
      default: 'vertical'
    },
    navs: {
      type: [Array],
      default: () => {
        return []
      }
    }
  }
}
</script>
<style lang="less">
@import "~@varcomcss";
.e-nav {
  color: #fff;
  background-color: #333;
  &.vertical {
    height: 100%;
    width: 64px;
  }
  .item {
    .item-wrapper {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      cursor: pointer;
      height: 60px;
      position: relative;
      &:hover {
        background-color: #666;
      }
      &.selected {
        background-color: #666;
      }
      .icon {
        img {
          width: 24px;
          height: 24px;
        }
      }
      .name {
        font-size: 12px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .item-expand-icon {
        position: absolute;
        right: 6px;
        top: 40px;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 6px solid #ddd;
        width: 0px;
        height: 0px;
        transition: 0.3s linear;
        &.action {
          transform: rotate(180deg);
        }
      }
    }

    .item-children {
      transition: all 0.3s ease;
      background-color: #444;
      height: auto;
      overflow: hidden;
      &.hideChildren {
        height: 0px;
      }
    }
  }

  .slide-enter-active {
    transition: all 0.3s ease;
  }
  .slide-leave-active {
    transition: all 0.3s ease;
  }
}
</style>
