<template>
  <z-button @click="openMsg">消息提示</z-button>
</template>

<script setup>
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();

const openMsg = () => {
  instance.proxy.$message({
    text: '默认消息提示！'
  });
};
</script>