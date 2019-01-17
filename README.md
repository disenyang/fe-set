<p align="center">
  <img src="http://u.xiaowanwu.cn/toolkit.svg">
</p>

> 一个基于vue2.0+的前端工具集.

## 链接
- 首页和文档
  - [官方说明]()

## 安装
```shell
npm install fe-set -S
```

## 快速开始
``` javascript
import Vue from 'vue'
import FeSet from 'fe-set'

Vue.use(FeSet)

// or（部分加载）
import {
  Select,
  Button
  // ...
} from 'fe-set'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```
更多介绍请参考 [Quick Start]()

## 浏览器支持
Modern browsers and Internet Explorer 10+.

## 开发