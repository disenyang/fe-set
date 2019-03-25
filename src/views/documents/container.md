
<script>
  export default{

    data(){
      return {
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .e-header, .e-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .e-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .e-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .e-container {
    margin-bottom: 40px;
  }
  
  .e-container:nth-child(5) .e-aside,
  .e-container:nth-child(6) .e-aside {
    line-height: 260px;
  }
  
  .e-container:nth-child(7) .e-aside {
    line-height: 320px;
  }
</style>
# Container 容器


## 示例

::: demo 用法

```desc
基础用法，使用下面的名字替换name的值
```

```html
<e-container>
  <e-header>Header</e-header>
  <e-main>Main</e-main>
</e-container>
<br>
<e-container>
  <e-header>Header</e-header>
  <e-main>Main</e-main>
  <e-footer>Footer</e-footer>
</e-container>
<br>
<e-container>
  <e-aside width="200px">Aside</e-aside>
  <e-main>Main</e-main>
</e-container>
<br>
<e-container>
  <e-header>Header</e-header>
  <e-container>
    <e-aside width="200px">Aside</e-aside>
    <e-main>Main</e-main>
  </e-container>
</e-container>
<br>
<e-container>
  <e-header>Header</e-header>
  <e-container>
    <e-aside width="200px">Aside</e-aside>
    <e-container>
      <e-main>Main</e-main>
      <e-footer>Footer</e-footer>
    </e-container>
  </e-container>
</e-container>
<br>
<e-container>
  <e-aside width="200px">Aside</e-aside>
  <e-container>
    <e-header>Header</e-header>
    <e-main>Main</e-main>
  </e-container>
</e-container>
<br>
<e-container>
  <e-aside width="200px">Aside</e-aside>
  <e-container>
    <e-header>Header</e-header>
    <e-main>Main</e-main>
    <e-footer>Footer</e-footer>
  </e-container>
</e-container>
```
:::



## Container 属性

| 参数    | 说明  | 类型    | 可选值     | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| direction   | 子元素的排列方向 | String | horizontal / vertical | 子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal |

## Header 属性
| 参数    | 说明  | 类型    | 可选值     | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| height   | 顶栏高度 | String | - | 60px |

## Aside 属性
| 参数    | 说明  | 类型    | 可选值     | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| width   | 侧边栏宽度 | String | - | 300px |

## Footer 属性
| 参数    | 说明  | 类型    | 可选值     | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| height   | 底栏高度 | String | - | 60px |

## Main 属性
| 参数    | 说明  | 类型    | 可选值     | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |

<!-- {table:.api-table} -->

