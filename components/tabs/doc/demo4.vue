<template>
  <z-tabs v-model="activeName">
    <z-tab-pane label="选项一" name="first">内容一</z-tab-pane>
    <z-tab-pane label="选项二" name="second">内容二</z-tab-pane>
    <z-tab-pane label="选项三" name="third" :disabled="true">内容三</z-tab-pane>
    <z-tab-pane label="选项四" name="fourth">内容四</z-tab-pane>
  </z-tabs>
</template>

<script setup>
import { ref } from 'vue';

const activeName = ref('first')
</script>