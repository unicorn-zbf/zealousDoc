<template>
  <z-row>
    <z-col>
      <z-rate v-model="value1" character="A"></z-rate>
    </z-col>
    <z-col style="margin-top:20px">
      <z-rate v-model="value2" character="好" allow-half></z-rate>
    </z-col>
    <z-col style="margin-top:20px">
      <z-rate v-model="value3" icon="smile-filling"></z-rate>
    </z-col>
  </z-row>
</template>

<script setup>
import { computed, ref } from 'vue';
const value1 = ref(2);
const value2 = ref(2);
const value3 = ref(2);
</script>