<template>
  <div class="z-badge">
    <slot></slot>
    <sup class="z-badge__content" :class="styleClass" v-show="!hidden && (content || content === 0 || isDot)">
      {{ content }}
    </sup>
  </div>
</template>

<script>
export default {
  name: "zBadge"
};
</script>

<script setup>
import { computed, useSlots } from 'vue';
const props = defineProps({
  value: String | Number,
  max: Number,
  type: {
    type: String,
    validator(val) {
      return ['primary', 'success', 'warning', 'info', 'error'].indexOf(val) > -1;
    }
  },
  isDot: {
    type: Boolean,
    default: false
  },
  hidden: {
    type: Boolean,
    default: false
  }
})

const $slots = useSlots()
const styleClass = computed(() => {
  return {
    'is-fixed': $slots.default,
    [`z-badge--${props.type}`]: props.type,
    'is-dot': props.isDot
  }
})

const content = computed(() => {
  if (props.isDot) return;
  const { value, max } = props
  if (typeof value === 'number' && typeof max === 'number') {
    return max < value ? `${max}+` : value;
  }

  return value;
})

</script>

<style lang="scss" scoped>
@import '../../styles/components/badge.scss';
</style>
