<template>
  <div>
    <z-radio-group v-model="radio1">
      <z-radio-button label="上海"></z-radio-button>
      <z-radio-button label="北京"></z-radio-button>
      <z-radio-button label="广州"></z-radio-button>
      <z-radio-button label="深圳"></z-radio-button>
    </z-radio-group>
  </div>
  <div style="margin-top: 20px;">
    <z-radio-group v-model="radio2">
      <z-radio-button label="上海"></z-radio-button>
      <z-radio-button label="北京" disabled></z-radio-button>
      <z-radio-button label="广州"></z-radio-button>
      <z-radio-button label="深圳"></z-radio-button>
    </z-radio-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const radio1 = ref('上海')
const radio2 = ref('上海')
</script>