<template>
  <z-checkbox v-model="checked" @change="checkChange">备选项</z-checkbox>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(true)

const checkChange = (e) => {
  console.log(e);
}
</script>