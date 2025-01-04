<template>
  <z-row>
    <span class="mr-10 l-hegight">Dark</span>
    <z-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="dark"
    >
      {{ item.label }}
    </z-tag>
  </z-row>
  <z-row>
    <span class="mr-10 l-hegight">Plain</span>
    <z-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="plain"
    >
      {{ item.label }}
    </z-tag>
  </z-row>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { type: '', label: '标签一' },
  { type: 'success', label: '标签二' },
  { type: 'info', label: '标签三' },
  { type: 'error', label: '标签四' },
  { type: 'warning', label: '标签五' }
])
</script>