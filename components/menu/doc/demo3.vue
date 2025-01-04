<template>
  <z-menu mode="horizontal" default-active="1" :theme="theme">
    <z-menu-item name="1">菜单一</z-menu-item>
    <z-menu-item name="2">菜单二</z-menu-item>
    <z-submenu name="3">
      <template #title>菜单三</template>
      <z-menu-group title="分组一">
        <z-menu-item name="3-1">item1</z-menu-item>
        <z-menu-item name="3-2">item2</z-menu-item>
        <z-menu-item name="3-3">item3</z-menu-item>
      </z-menu-group>
      <z-menu-group title="分组二">
        <z-menu-item name="3-4">item4</z-menu-item>
        <z-menu-item name="3-5">item5</z-menu-item>
        <z-menu-item name="3-6">item6</z-menu-item>
      </z-menu-group>
    </z-submenu>
    <z-menu-item name="4">菜单四</z-menu-item>
  </z-menu>

  <z-menu class="mt-50" default-active="1" :theme="theme">
    <z-menu-item name="1">菜单一</z-menu-item>
    <z-menu-item name="2">菜单二</z-menu-item>
    <z-submenu name="3">
      <template #title>菜单三</template>
      <z-menu-group title="分组一">
        <z-menu-item name="3-1">item1</z-menu-item>
        <z-menu-item name="3-2">item2</z-menu-item>
        <z-menu-item name="3-3">item3</z-menu-item>
      </z-menu-group>
      <z-menu-group title="分组二">
        <z-menu-item name="3-4">item4</z-menu-item>
        <z-menu-item name="3-5">item5</z-menu-item>
        <z-menu-item name="3-6">item6</z-menu-item>
      </z-menu-group>
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
</script>

<style scoped>
.theme-style {
  margin-top: 20px;
}

.title {
  margin: 5px;
  font-size: 14px;
}

.mt-50 {
  margin-top: 50px;
}
</style>