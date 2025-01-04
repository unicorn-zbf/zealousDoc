<template>
  <div>
    <z-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <z-radio-button label="top"></z-radio-button>
      <z-radio-button label="right"></z-radio-button>
      <z-radio-button label="bottom"></z-radio-button>
      <z-radio-button label="left"></z-radio-button>
    </z-radio-group>
    <z-tabs v-model="activeName" :tab-position="tabPosition" style="height: 200px;">
      <z-tab-pane label="选项一" name="first">内容一</z-tab-pane>
      <z-tab-pane label="选项二" name="second">内容二</z-tab-pane>
      <z-tab-pane label="选项三" name="third">内容三</z-tab-pane>
      <z-tab-pane label="选项四" name="fourth">内容四</z-tab-pane>
    </z-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tabPosition = ref('top')
const activeName = ref('first')
</script>