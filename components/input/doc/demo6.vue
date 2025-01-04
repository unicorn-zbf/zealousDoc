<template>
  <z-input v-model="value" placeholder="请输入密码" showPassword></z-input>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('')
</script>
