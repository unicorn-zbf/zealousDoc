<template>
  <z-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <z-tab-pane label="选项一" name="first">内容一</z-tab-pane>
    <z-tab-pane label="选项二" name="second">内容二</z-tab-pane>
    <z-tab-pane label="选项三" name="third">内容三</z-tab-pane>
    <z-tab-pane label="选项四" name="fourth">内容四</z-tab-pane>
  </z-tabs>
</template>

<script setup>
import { ref } from 'vue';

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>