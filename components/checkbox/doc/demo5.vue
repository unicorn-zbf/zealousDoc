<template>
  <div>
    <z-checkbox-group v-model="checkboxGroup1">
      <z-checkbox-button v-for="city in cities" :label="city" :key="city">
        {{city}}
      </z-checkbox-button>
    </z-checkbox-group>
  </div>
  <div style="margin-top: 20px;">
    <z-checkbox-group v-model="checkboxGroup2">
      <z-checkbox-button v-for="city in cities" :label="city" :key="city" :disabled="city === '北京'">
        {{city}}
      </z-checkbox-button>
    </z-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const checkboxGroup1 = ref(['上海'])
const checkboxGroup2 = ref(['上海'])

const cities = ['上海', '北京', '广州', '深圳']
</script>