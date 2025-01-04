<template>
  <z-button @click="openMsg">消息提示</z-button>
</template>

<script setup>
import { h } from 'vue';
import Message from '../index.ts'; //此处为本地示例，请使用 import {Message} from "zealous-ui";引入
const openMsg = () => {
  Message({
    text: '默认消息提示！',
    showClose: true
  })
}
</script>