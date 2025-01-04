<template>
  <z-radio v-model="radioVal" label="1" disabled>备选项1</z-radio>
  <z-radio v-model="radioVal" label="2" disabled>备选项2</z-radio>
</template>

<script setup>
import { ref } from 'vue'

const radioVal = ref('1')
</script>