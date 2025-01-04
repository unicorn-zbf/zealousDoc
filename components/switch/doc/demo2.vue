<template>
  <z-switch v-model="switchVal1" disabled></z-switch>
  <z-switch v-model="switchVal2" disabled class="pl-10"></z-switch>
</template>

<script setup>
import { ref } from "vue";
const switchVal1 = ref(true);
const switchVal2 = ref(false);
</script>