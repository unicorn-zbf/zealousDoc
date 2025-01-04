<template>
  <z-row>
    <z-col>
      <z-rate v-model="value1" clearable></z-rate> clearable: true
    </z-col>
    <z-col style="margin-top:20px">
      <z-rate v-model="value2"></z-rate> clearable: false
    </z-col>
  </z-row>
</template>

<script setup>
import { computed, ref } from 'vue';
const value1 = ref(2);
const value2 = ref(2);
</script>