<template>
  <ul class="z-breadcrumb">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "zBreadcrumb"
};
</script>

<script setup>
import { provide } from 'vue';
const props = defineProps({
  // 分割符字符串
  separator: {
    type: String,
    default: '/'
  },
  separatorClass: {
    type: String,
    default: ''
  }
})

provide('breadcrumbKey',props)
</script>

<style lang="scss" scoped>
@import '../../../styles/components/breadcrumb.scss';
</style>
