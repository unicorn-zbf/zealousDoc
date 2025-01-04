import zMessage from './index.vue';
import { h, render } from 'vue';

export default ({ text, type, timeout, icon, textColor, bgColor, customClass, center, showClose }
  :{text:any, type:any, timeout:any, icon:any, textColor:any, bgColor:any, customClass:any, center:any, showClose:any}) => {
  const div:any =
    typeof document !== 'undefined'
      ? typeof document.createElement !== 'undefined'
        ? document.createElement('div')
        : ''
      : ''
  div.setAttribute('class', 'z-message-container')

  if (typeof document !== 'undefined') {
    document.body.appendChild(div)
  }
  let timer:any = null
  // 传递给组件的选项
  // h() 函数是一个用于创建 VNode 的实用程序,它接受三个参数
  const vnode = h(zMessage, { text, type, timeout, icon, textColor, bgColor, customClass, center, showClose }, () => [text])
  render(vnode, div)
  if (timeout === 0) return
  timer = setTimeout(() => {
    render(null, div)
    if (typeof document !== 'undefined') {
      document.body.removeChild(div)
    }
    clearTimeout(timer)
  }, timeout || 3000)
}
