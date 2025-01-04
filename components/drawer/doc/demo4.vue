<template>
  <z-button @click="outDrawer = true">点击打开</z-button>

  <z-drawer
    title="我是外面的 Drawer"
    v-model="outDrawer"
    width="50%">
    <div>
    <z-button @click="innerDrawer = true">打开里面的!</z-button>
    <z-drawer
      title="我是里面的 Drawer"
      :append-to-body="true"
      v-model="innerDrawer">
      <p>快到碗里来！</p>
    </z-drawer>
    </div>
  </z-drawer>
</template>

<script setup>
import { ref } from "vue";

const outDrawer = ref(false);
const innerDrawer = ref(false);
</script>