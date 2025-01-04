<template>
  <z-button @click="drawerShow=true">点击打开</z-button>

  <z-drawer
    v-model="drawerShow"
    title="基本使用"
    :with-header="false"
  >
    <div>我来啦。。。</div>
  </z-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawerShow = ref(false);
</script>