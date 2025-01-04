<template>
  <z-space>
    <z-button @click="open1">左边-left</z-button>
    <z-button @click="open2">上边-top</z-button>
    <z-button @click="open3">右边-right</z-button>
    <z-button @click="open4">下边-bottom</z-button>
  </z-space>

  <z-drawer
    v-model="drawerShow"
    title="基本使用"
    :direction="direction"
  >
    <div>我来啦。。。</div>
  </z-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawerShow = ref(false);
const direction = ref('left');

const open1 = () => {
  drawerShow.value = true
  direction.value = 'left'
}
const open2 = () => {
  drawerShow.value = true
  direction.value = 'top'
}
const open3 = () => {
  drawerShow.value = true
  direction.value = 'right'
}
const open4 = () => {
  drawerShow.value = true
  direction.value = 'bottom'
}
</script>