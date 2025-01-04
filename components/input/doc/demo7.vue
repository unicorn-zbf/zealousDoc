<template>
  <z-space>
    <z-input v-model="value1" clearable>
      <template #prepend>
        <z-button type="primary" leftIcon="icon-search">搜索</z-button>
      </template>
    </z-input>
    <z-input v-model="value2" clearable>
      <template #append>
        <z-button type="primary" leftIcon="icon-search">搜索</z-button>
      </template>
    </z-input>
  </z-space>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('')
const value2 = ref('')
</script>