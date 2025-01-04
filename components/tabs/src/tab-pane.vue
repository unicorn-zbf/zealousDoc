<template>
  <div class="z-tab-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "zTabPane"
};
</script>

<script setup>
import { computed,inject } from 'vue';
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
  },
  disabled:{
    type: Boolean,
    default:false
  },
})

</script>

<style lang="scss" scoped>

</style>
