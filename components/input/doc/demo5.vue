<template>
  <z-space>
    <z-input v-model="value1" placeholder="请输入"></z-input>
    <z-input v-model="value2" placeholder="请输入" size="medium"></z-input>
    <z-input v-model="value3" placeholder="请输入" size="small"></z-input>
    <z-input v-model="value4" placeholder="请输入" size="mini"></z-input>
  </z-space>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>