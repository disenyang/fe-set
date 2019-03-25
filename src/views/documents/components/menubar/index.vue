<template>
  <div class="e-menubar" :class="[direction]">
    <div class="item" :key="item.path" v-for="item in menus">
      <div class="item-wrapper" @click="clickItem(item)" :class="{selected:item==selectedItem}">
          <div class="name name-l1">{{item.name}}</div>
        </div>
        <div class="item-children"  >
          <!-- 二级 -->
          <div class="item" :key="item2.path" v-for="item2 in item.children">
            <div class="item-wrapper" @click="clickItem(item2)" :class="{selected:item2==selectedItem}">
              <div class="name">{{item2.name}}</div>
            </div>
            <div class="item2-children" >
              <!-- 三级 -->
              <div class="item" :key="item3.path" v-for="item3 in item2.children">
                <div class="item-wrapper" @click="clickItem(item3)" :class="{selected:item3==selectedItem}">
                  <div class="name">{{item3.name}}</div>
                </div>
                <div class="item-children">
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
  name: 'Menubar',
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
      console.log('this.selectedItem', this.selectedItem)
    }
  },
  props: {
    direction: {
      type: [String],
      default: 'vertical',
      values: [
        {
          lab: '垂直',
          val: 'vertical'
        },
        {
          lab: '水平',
          val: 'horizontal'
        }
      ]
    },
    menus: {
      type: [Array],
      default: () => {
        return []
      }
    }
  }
}
</script>
<style lang="less">
@import '~@varcss';
.e-menubar {
  &.vertical {
    height: 100%;
  }
  .item {
    .item-wrapper {
      padding: 0px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      cursor: pointer;
      line-height: 40px;
      position: relative;
      color: #444;
      font-size: 14px;
      &:hover{
        color: #6666ff;
      }
      &.selected{
        color: #6666ff;
      }
      .name-l1{
        font-weight: 700;
        font-size: 16px;
        margin: 20px 0 0 0;
      }
      .icon {
        img {
          width: 24px;
          height: 24px;
        }
      }
      .name {
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
