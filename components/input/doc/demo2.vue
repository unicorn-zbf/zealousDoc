<template>
  <z-input v-model="value" placeholder="禁用状态" disabled></z-input>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('')
</script>
