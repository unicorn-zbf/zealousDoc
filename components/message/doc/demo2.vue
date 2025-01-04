<template>
  <z-space>
    <z-button @click="openSuccess">成功</z-button>
    <z-button @click="openWarn">警告</z-button>
    <z-button @click="openInfo">消息</z-button>
    <z-button @click="openError">错误</z-button>
    <z-button @click="openCustom">自定义</z-button>
  </z-space>
</template>

<script setup>
import Message from '../index.ts'; //此处为本地示例，请使用 import {Message} from "zealous-ui";引入

const openSuccess = () => {
  Message({
    type: "success",
    text: "成功状态消息提示!",
  });
};
const openWarn = () => {
  Message({
    type: "warning",
    text: "警告状态消息提示!",
  });
};
const openInfo = () => {
  Message({
    text: "这是一条消息提示!",
  });
};
const openError = () => {
  Message({
    type: "error",
    text: "错误状态消息提示!",
  });
};
const openCustom = () => {
  Message({
    type: "custom",
    text: "自定义消息弹窗样式",
    icon: "icon-calendar",
    textColor: "#fff",
    bgColor: "#42B983",
  });
};
</script>