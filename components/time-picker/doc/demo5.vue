<template>
  <z-time-picker v-model="value1" placeholder="请选择时间" confirm @on-confirm="onConfirm"></z-time-picker>
  <z-time-picker class="time" type="timerange" v-model="value2" placeholder="请选择时间范围" confirm></z-time-picker>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('03:12:30')
const value2 = ref(['03:12:30','05:24:35'])
const onConfirm = (val) => {
  console.log(val);
}
</script>

<style>
.time{
  margin-left: 30px;
}
</style>