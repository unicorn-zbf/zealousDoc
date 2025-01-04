<template>
  <z-radio-group v-model="radioVal">
    <z-radio :label="1">备选项1</z-radio>
    <z-radio :label="2">备选项2</z-radio>
    <z-radio :label="3">备选项3</z-radio>
  </z-radio-group>
</template>

<script setup>
import { ref } from 'vue'

const radioVal = ref('1')
</script>