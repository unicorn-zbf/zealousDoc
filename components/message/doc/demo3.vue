<template>
  <z-button @click="openMsg">文字居中</z-button>
</template>

<script setup>
import { h } from 'vue';
import Message from '../index.ts'; //此处为本地示例，请使用 import {Message} from "zealous-ui";引入
const openMsg = () => {
  Message({
    text: '居中的文字！',
    center: true
  })
}
</script>