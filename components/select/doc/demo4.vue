<template>
  <z-select v-model="selVal" clearable>
    <z-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </z-option>
  </z-select>
</template>

<script setup>
import { ref } from 'vue'
const selVal = ref('')

const options = [
  { value: 'value1', label: 'Option1' },
  { value: 'value2', label: 'Option2' },
  { value: 'value3', label: 'Option3' },
  { value: 'value4', label: 'Option4' },
  { value: 'value5', label: 'Option5' },
]
</script>