<template>
  <z-date-picker v-model="value1" placeholder="请选择日期" confirm @on-confirm="onConfirm"></z-date-picker>
  <z-date-picker class="date" v-model="value2" type="daterange" placeholder="请选择日期" confirm></z-date-picker>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref()
const value2 = ref([])

const onConfirm = (val) => {
  console.log(val);
}
</script>

<style>
.date{
  margin-left: 50px;
}
</style>