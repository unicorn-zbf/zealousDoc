<template>
  <z-rate v-model="value" disabled></z-rate>
</template>

<script setup>
import { ref } from 'vue';
const value = ref(2)
</script>