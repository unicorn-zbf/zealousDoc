<template>
  <span class="z-tag" :class="styleClass" :style="colorStyle" @click="handleClick">
    <slot />
    <i class="iconfont icon-close" v-if="closable" @click="handleClose"></i>
  </span>
</template>

<script>
import { computed } from 'vue';
export default {
  name: "zTag"
};
</script>

<script setup>
const emit = defineEmits(['click','close'])
const props = defineProps({
  type: String,
  closable: {
    type: Boolean,
    default: false
  },
  bgColor: String,
  color: String,
  size: String,
  effect: {
    type: String,
    default: 'light',
    validator(val) {
      return ['dark', 'light', 'plain'].indexOf(val) !== -1;
    }
  }
})

const styleClass = computed(() => {
  return {
    [`z-tag--${props.type}`]: props.type,
    [`z-tag--${props.size}`]: props.size,
    [`z-tag--${props.effect}`]: props.effect
  }
})

const colorStyle = computed(() => {
  return {
    backgroundColor: props.bgColor,
    color: props.color
  }
})

const handleClick = (event) => {
  emit('click',event)
}

const handleClose = (event) => {
  event.stopPropagation();
  emit('close',event)
}

</script>

<style lang="scss" scoped>
@import '../../styles/components/tag.scss';
</style>
