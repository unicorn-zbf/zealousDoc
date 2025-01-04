<template>
  <z-menu mode="horizontal" default-active="1" :theme="theme" @on-select="onSelect">
    <z-menu-item name="1">菜单一</z-menu-item>
    <z-menu-item name="2">菜单二</z-menu-item>
    <z-submenu name="3">
      <template #title>菜单三</template>
      <z-menu-item name="3-1">item1</z-menu-item>
      <z-menu-item name="3-2">item2</z-menu-item>
      <z-menu-item name="3-3">item3</z-menu-item>
    </z-submenu>
    <z-menu-item name="4">菜单四</z-menu-item>
  </z-menu>
  <div class="theme-style">
    <p class="title">切换主题</p>
    <z-radio-group v-model="theme">
      <z-radio label="light">light</z-radio>
      <z-radio label="dark">dark</z-radio>
    </z-radio-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('light')

const onSelect = (val) => {
  console.log(val);
}
</script>

<style scoped>
.theme-style {
  margin-top: 20px;
}

.title {
  margin: 5px;
  font-size: 14px;
}
</style>