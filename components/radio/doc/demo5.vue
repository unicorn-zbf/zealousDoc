<template>
  <div>
    <z-radio v-model="radio1" label="1" border>备选项1</z-radio>
    <z-radio v-model="radio1" label="2" border>备选项2</z-radio>
    <z-radio v-model="radio1" label="3" border>备选项3</z-radio>
  </div>
  <div style="margin-top: 20px">
    <z-radio-group v-model="radio2">
      <z-radio label="1" border>备选项1</z-radio>
      <z-radio label="2" border>备选项2</z-radio>
      <z-radio label="3" border>备选项3</z-radio>
    </z-radio-group>
  </div>
  <div style="margin-top: 20px">
    <z-radio-group v-model="radio3">
      <z-radio label="1" border>备选项1</z-radio>
      <z-radio label="2" border disabled>备选项2</z-radio>
      <z-radio label="3" border>备选项3</z-radio>
    </z-radio-group>
  </div>
  <div style="margin-top: 20px">
    <z-radio-group v-model="radio4" disabled>
      <z-radio label="1" border>备选项1</z-radio>
      <z-radio label="2" border>备选项2</z-radio>
      <z-radio label="3" border>备选项3</z-radio>
    </z-radio-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
</script>