# Row 栅格

<style lang="less" scoped>
  
  .e-row{
    color: #fff;

    &:last-child{
      margin-bottom: 0;
    }

    .e-col{
      height: 40px;
      line-height: 40px;
      margin-bottom: 20px;
      background-color: #4fa2f4;
      text-align: center;

      &:nth-child(2n+1){
        background-color: #207cd9;
      }
    }
  }
</style>

栅格分为 24 格，通过 Row 和 Col 组件结合起来使用

## 示例

::: demo 基本用法

设置 span 属性可以控制栅格的宽度，span 加起来超过 24 的话，会自动换行显示
<!-- {slot="desc"} -->

```html
<e-row>
  <e-col span="6">col-span-6</e-col>
  <e-col span="6">col-span-6</e-col>
  <e-col span="6">col-span-6</e-col>
  <e-col span="6">col-span-6</e-col>
</e-row>
<e-row>
  <e-col span="8">col-span-8</e-col>
  <e-col span="16">col-span-16</e-col>
</e-row>
<e-row>
  <e-col span="8">col-span-8</e-col>
  <e-col span="4">col-span-4</e-col>
  <e-col span="16">col-span-16</e-col>
</e-row>
```
:::

::: demo offset 属性

offset 属性可以设置栅格的偏移，用 offset 设置的偏移是占位空间的偏移，会影响之后的栅格的位置
<!-- {slot="desc"} -->

```html
<e-row>
  <e-col span="8">col-span-8</e-col>
  <e-col span="8" offset="8">col-span-8-offset-8</e-col>
  <e-col span="8">col-span-8</e-col>
</e-row>
```
:::

::: demo push 和 pull 属性

push 和 pull 属性设置的偏移，是显示空间的偏移，不会影响其他的栅格的位置
<!-- {slot="desc"} -->

```html
<e-row>
  <e-col span="8">col-span-8</e-col>
  <e-col span="8" push="8">col-span-8-push-8</e-col>
  <e-col span="4">col-span-4</e-col>
</e-row>
<e-row>
  <e-col span="8">col-span-8</e-col>
  <e-col span="8" pull="4">col-span-8-push-8</e-col>
  <e-col span="4">col-span-4</e-col>
</e-row>
```
:::

## Row Slot

| Slot 名称 | 说明 |
| ---------| -----|
| default | 只支持 Col 组件 |
<!-- {table:.api-table} -->

## Col 属性

 参数    | 说明  | 类型    | 可选值     | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| span | 格数 |  Number \| String  | - | - |
| offset | 距左边的位移格数（margin-left） | Number \| String | - | - |
| push | 距左边的偏移格数（left） | Number \| String | - | - |
| pull | 距右边的偏移格式（right） | Number \| String | - | - |
<!-- {table:.api-table} -->



