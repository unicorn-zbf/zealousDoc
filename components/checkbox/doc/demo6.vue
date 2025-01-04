<template>
  <div>
    <z-checkbox v-model="checked1" border>备选项1</z-checkbox>
    <z-checkbox v-model="checked2" border>备选项2</z-checkbox>
  </div>
  <div style="margin-top: 20px">
    <z-checkbox-group v-model="checkboxGroup1">
      <z-checkbox label="备选项1" border></z-checkbox>
      <z-checkbox label="备选项2" border disabled></z-checkbox>
    </z-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <z-checkbox-group v-model="checkboxGroup2" disabled>
      <z-checkbox label="备选项1" border></z-checkbox>
      <z-checkbox label="备选项2" border></z-checkbox>
    </z-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const checked1 = ref(true)
const checked2 = ref(false)
const checkboxGroup1 = ref(['备选项1'])
const checkboxGroup2 = ref([])
</script>