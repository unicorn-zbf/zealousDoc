<template>
  <div class="z-card" :class="shadowClass">
    <div class="z-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="z-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "zCard"
};
</script>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  header: {
    type: String,
    default: '',
  },
  bodyStyle: Object,
  shadow: {
    type: String,
    default: 'always'
  }
})

const shadowClass = computed(() => {
  return {
    [`is-shadow-${props.shadow}`]: props.shadow
  }
})

</script>

<style lang="scss" scoped>
@import '../../styles/components/card.scss';
</style>
