<template>
  <z-rate v-model="valueHalf" allow-half></z-rate>
</template>

<script setup>
import { ref } from 'vue';
const valueHalf = ref(2.5)
</script>