<script>
  export default{

    data(){
      return {
        counter: 0,
        buttonText: '点我触发click事件',
        buttonLoading: false
      }
    },
    methods: {
      buttonClickHandler(){
        this.buttonLoading = true;
        this.buttonText =  `我被点了 ${++this.counter} 下~`;

        setTimeout(() => this.buttonLoading = false, 5000);
      }
    }
  }
</script>

<style lang="less" scoped>
  
  .e-row{
    margin-bottom: 20px;
  }

  .e-button.e-button--text{
    margin-right: 20px;
  }

  .e-button.e-button--text.is-icon-only{
    margin-right: 0;
  }
</style>

# Button 按钮

按钮用于触发事件

## 示例

::: demo 按钮的类型

```desc
有 3 种类型按钮：实体按钮、描边按钮、文字按钮，设置 type 属性为 solid、stroke、text 可以启用，默认为 solid 类型

实体按钮 用于主要操作

描边按钮 用于次要操作

文字按钮 用于局部操作
```

```html
<e-button>Default</e-button>
<e-button type="stroke">Stroke</e-button>
<e-button type="text">Text</e-button>
```
:::

::: demo 按钮的颜色

```desc
一般情况下按钮有 4 种颜色：primary、success、warn、danger，设置 color 属性为相应的值即可启用，默认为 primary 颜色。

对于文字按钮，还有一种 gray 颜色可以选用。
```

```html
<e-button size="large">Primary</e-button>
<e-button color="success">Success</e-button>
<e-button color="warn">Warn</e-button>
<e-button color="danger" size="small">Danger</e-button>
<br><br>
<e-button type="stroke">Primary</e-button>
<e-button type="stroke" color="success">Success</e-button>
<e-button type="stroke" color="warn">Warn</e-button>
<e-button type="stroke" color="danger">Danger</e-button>
<br><br>
<e-button type="text">Default</e-button>
<e-button type="text" color="success">Success</e-button>
<e-button type="text" color="warn">Warn</e-button>
<e-button type="text" color="danger">Danger</e-button>
<e-button type="text" color="gray">Gray</e-button>
```

:::

::: demo 按钮的尺寸

```desc
有大、中、小 3 种尺寸的按钮，设置 size 属性为 large、middle、small 可以启用，默认为中尺寸按钮。
```

```html
<e-button size="large">大实体按钮</e-button>
<e-button size="large" type="stroke">大描边按钮</e-button>
<e-button size="large" type="text">大文字按钮</e-button>
<br><br>
<e-button>实体按钮</e-button>
<e-button type="stroke">描边按钮</e-button>
<e-button type="text">文字按钮</e-button>
<br><br>
<e-button size="small">小实体按钮</e-button>
<e-button size="small" type="stroke">小描边按钮</e-button>
<e-button size="small" type="text">小文字按钮</e-button>
```
:::

::: demo 带图标的按钮

```desc
通过设置 icon 属性为 EIcon 组件的图标名字，可以给按钮添加相应的图标
```

```html
<e-button icon="plus" size="large">实体按钮</e-button>
<e-button icon="plus" type="stroke">描边按钮</e-button>
<e-button icon="plus" type="text" size="small">文字按钮</e-button>
```
:::

::: demo 自定义内容

```desc
可以自定义按钮内容
```

```html
<e-button size="small">自定义内容<e-icon name="plus"></e-icon></e-button>
```
:::

::: demo 纯图标按钮和圆形的按钮

```desc
当设置了 icon 属性，但是按钮内容为空时，显示为纯图标按钮

纯图标按钮可以通过设置 shape 属性为 circle 显示为圆形按钮
```

```html
<e-button icon="search" size="large"></e-button>
<e-button icon="search"></e-button>
<e-button icon="search" size="small"></e-button>
<br><br>
<e-button icon="search" shape="circle" size="large"></e-button>
<e-button icon="search" shape="circle"></e-button>
<e-button icon="search" shape="circle" size="small"></e-button>
<br><br>
<e-button icon="search" shape="circle" type="stroke" size="large"></e-button>
<e-button icon="search" shape="circle" type="stroke"></e-button>
<e-button icon="search" shape="circle" type="stroke" size="small"></e-button>
<br><br>
<e-button icon="search" shape="circle" type="text" color="gray" size="large"></e-button>
<e-button icon="search" shape="circle" type="text" color="gray"></e-button>
<e-button icon="search" shape="circle" type="text" color="gray" size="small"></e-button>
```
:::

::: demo 禁用状态

```desc
禁用状态的按钮，点击不会触发事件，设置 disabled 属性可以启用
```

```html
<e-button disabled>实体按钮</e-button>
<e-button type="stroke" disabled>描边按钮</e-button>
<e-button type="text" disabled>文字按钮</e-button>
```
:::

::: demo 加载中状态

```desc
加载中状态的按钮，点击不会触发事件，设置 loading 属性可启用
```

```html
<e-button loading size="large">加载中</e-button>
<e-button loading type="stroke">加载中</e-button>
<e-button loading type="text" size="small" color="gray">加载中</e-button>
<br><br>
<e-button loading></e-button>
<e-button loading shape="circle"></e-button>
<e-button loading shape="circle" type="stroke"></e-button>
<e-button loading shape="circle" type="text" color="gray"></e-button>
```
:::

::: demo 触发点击事件

```desc
在非禁用和非加载中状态时， 点击时可以触发 click 事件
```

```html
<template>
  <e-button @click="buttonClickHandler" :loading="buttonLoading">{{buttonText}}</e-button>
</template>
<script>

  export default{

    data(){
      return {
        counter: 0,
        buttonText: '点我触发click事件',
        buttonLoading: false
      }
    },
    methods: {
      buttonClickHandler(){
        this.buttonLoading = true;
        this.buttonText =  `我被点了 ${++this.counter} 下~`;

        setTimeout(() => this.buttonLoading = false, 5000);
      }
    }
  }
</script>

```
:::

::: demo 按钮组合

```desc
多个按钮结合在一起使用时，可以使用按钮组合 ButtonGroup 组件
```

```html
<e-button-group>
  <e-button>上天去</e-button>
  <e-button icon="smile-o"></e-button>
</e-button-group>
<br><br>
<e-button-group>
  <e-button>1</e-button>
  <e-button disabled>2</e-button>
  <e-button>3</e-button>
  <e-button>4</e-button>
</e-button-group>
<br><br>
<e-button-group>
  <e-button>1</e-button>
  <e-button color="success">2</e-button>
  <e-button color="warn">3</e-button>
  <e-button color="danger">4</e-button>
</e-button-group>
<br><br>
<e-button-group>
  <e-button type="stroke">1</e-button>
  <e-button type="stroke" color="success">2</e-button>
  <e-button type="stroke" color="warn">3</e-button>
  <e-button type="stroke" color="danger">4</e-button>
</e-button-group>
```
:::

## Button 属性

| 参数    | 说明  | 类型    | 可选值     | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type   | 类型 | String | solid, stroke, text | solid |
| color   | 颜色   | String  | primary, success, warn, danger, gray（仅text类型时可选） | primary |
| size   | 尺寸   | String  | large, middle, small | middle |
| shape  | 形状   | String  | circle | — |
| icon   | 图标 | String | 参考 EIcon 组件 | - |
| disabled | 是否禁用状态  | Boolean   | — | false |
| loading  | 是否加载中状态  | Boolean   | — | false |
| native-type | 设置 button 元素原生的 type 属性 | String | - | button |
<!-- {table:.api-table} -->

## Button 事件

| 事件名称 | 说明 | 参数 |
|----------|--------|-------|
| click | 点击触发 | - |
<!-- {table:.api-table} -->
