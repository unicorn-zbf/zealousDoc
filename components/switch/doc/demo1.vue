<template>
  <z-switch v-model="switchVal"></z-switch>
</template>

<script setup>
import { ref } from "vue";
const switchVal = ref(true);
</script>