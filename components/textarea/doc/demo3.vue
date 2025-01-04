<template>
  <z-textarea v-model="textareaVal" placeholder="请输入内容" :maxlength="100" show-word-limit></z-textarea>
</template>

<script setup>
import { ref } from "vue";
const textareaVal = ref('');
</script>