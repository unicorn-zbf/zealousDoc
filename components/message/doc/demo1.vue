<template>
  <z-space>
    <z-button @click="openMsg1">消息提示</z-button>
    <z-button @click="openMsg2">消息提示(VNode)</z-button>
    <z-button @click="openMsg3">5秒后消失</z-button>
  </z-space>
</template>

<script setup>
import { h } from 'vue';
import Message from '../index.ts'; //此处为本地示例，请使用 import {Message} from "zealous-ui";引入
const openMsg1 = () => {
  Message({
    text: '默认消息提示！'
  })
}
const openMsg2 = () => {
  Message({
    text: h('p', null, [
      h('span', null, '默认消息提示'),
      h('i', { style: 'color: teal' }, 'VNode')
    ])
  })
}
const openMsg3 = () => {
  Message({
    text: '5秒后消失！',
    timeout: 5000
  })
}
</script>