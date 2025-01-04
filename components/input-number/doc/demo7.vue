<template>
  <div>
    <z-input-number v-model="num1" />
    <z-input-number v-model="num2" size="medium" style="margin-left:20px;margin-right:20px" />
    <z-input-number v-model="num3" size="small" />
  </div>
  <div style="margin-top:20px">
    <z-input-number v-model="num1" controls-position="right" />
    <z-input-number v-model="num2" controls-position="right" size="medium" style="margin-left:20px;margin-right:20px" />
    <z-input-number v-model="num3" controls-position="right" size="small" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const num1 = ref(1)
const num2 = ref(2)
const num3 = ref(3)
</script>