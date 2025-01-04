# 安装使用
本节将介绍如何在项目中使用 zealous-ui

## 安装
使用npm 或 yarn 安装

```
npm install zealous-ui
yarn add zealous-ui
```

## 引入 zealous-ui
### 完整引入
#### 需要注意的是 css 样式文件需要单独引入。
在 main.js 中写入以下内容：
```javascript
import { createApp } from 'vue'
import App from './App.vue'
// 导入组件库
import ZUI from 'zealous-ui'
import '../node_modules/zealous-ui/dist/style.css';


const app = createApp(App)
app.use(ZUI)
app.mount('#app')
```
<br/>

## 愉快开始

#### 至此 zealous-ui 就引入完成并且可以使用了。

```html
<!-- html -->
<z-button>默认按钮</z-button>
<z-button type="primary">主要按钮</z-button>
```


## 按需引用

#### 您可以根据个人需要使用按需引用组件，按需引用时不需要使用 `app.use()` 方法注册。
```javascript
/*js*/
import { zButton } from 'zealous-ui';
```

```html
<!-- html -->
<z-button>点击</z-button>
```

<br/>