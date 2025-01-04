<template>
  <div class="z-option-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "zOption"
};
</script>

<script setup>
const props = defineProps({
  value: {
    required: true
  },
  label: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  },
})
</script>

<style lang="scss" scoped>
@import '../../../styles/components/select.scss';
</style>
