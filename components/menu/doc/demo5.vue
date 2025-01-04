<template>
  <z-menu default-active="1-2" :default-openeds="['1']" :theme="theme">
    <z-submenu name="1">
      <template #title>菜单一</template>
      <z-menu-item name="1-1">item1</z-menu-item>
      <z-menu-item name="1-2">item2</z-menu-item>
      <z-menu-item name="1-3">item3</z-menu-item>
    </z-submenu>
    <z-submenu name="2">
      <template #title>菜单二</template>
      <z-menu-item name="2-1">item1</z-menu-item>
      <z-menu-item name="2-2">item2</z-menu-item>
      <z-menu-item name="2-3">item3</z-menu-item>
    </z-submenu>
    <z-submenu name="3">
      <template #title>菜单三</template>
      <z-menu-item name="3-1">item1</z-menu-item>
      <z-menu-item name="3-2">item2</z-menu-item>
      <z-menu-item name="3-3">item3</z-menu-item>
    </z-submenu>
    <z-submenu name="4">
      <template #title>菜单四</template>
      <z-menu-item name="4-1">item1</z-menu-item>
      <z-menu-item name="4-2">item2</z-menu-item>
      <z-menu-item name="4-3">item3</z-menu-item>
    </z-submenu>
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

const theme = ref('light');
</script>

<style scoped>
.theme-style {
  margin-top: 20px;
}

.title {
  margin: 5px;
  font-size: 14px;
}

.mb-20 {
  margin-bottom: 20px;
}
</style>