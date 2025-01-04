<template>
  <z-date-picker v-model="value1" disabled  placeholder="请选择日期"></z-date-picker>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('2022-08-30')
</script>