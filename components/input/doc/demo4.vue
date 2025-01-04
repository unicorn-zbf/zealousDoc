<template>
  <z-space>
    <z-input v-model="value1" placeholder="请输入" leftIcon="icon-search"></z-input>
    <z-input v-model="value2" placeholder="请输入" rightIcon="icon-calendar"></z-input>
  </z-space>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('')
const value2 = ref('')
</script>