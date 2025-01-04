<template>
  <div class="z-switch-default" :class="sizeClass">
    <span 
      class="z-switch-label z-switch-label-left"
      :class="[!curChecked ? 'is-active' : '']"
      v-if="inactiveText && !inlinePrompt">
      {{inactiveText}}
    </span>
    <div 
      class="z-switch-content" 
      :class="styleClass" 
      @click="handleSwitch"
    >
      <input type="checkbox" v-model="curChecked">
      <span class="core" :class="[curChecked ? 'on' : 'off']" :style="coreStyle">
        <span class="z-switch-inner" v-if="inlinePrompt">
          {{curChecked ? activeText : inactiveText}}
        </span>
      </span>
    </div>
    <span 
      class="z-switch-label z-switch-label-right" 
      :class="[curChecked ? 'is-active' : '']"
      v-if="activeText && !inlinePrompt">
      {{activeText}}
    </span>
  </div>
</template>

<script>
export default {
  name: "zSwitch"
};
</script>

<script setup>
import { computed, ref } from 'vue'

const emit = defineEmits(['update:modelValue','change'])
const props = defineProps({
  modelValue:Boolean,
  disabled: {
    type: Boolean,
    default: false
  },
  activeText: {
    type: String,
    default: ''
  },
  inactiveText: {
    type: String,
    default: ''
  },
  activeColor: {
    type: String,
    default: ''
  },
  inactiveColor: {
    type: String,
    default: ''
  },
  inlinePrompt: {
    type: Boolean,
    default: false
  },
  size: String
})
const curChecked = ref(props.modelValue)

const styleClass = computed(() => {
  return {
    'is-disabled': props.disabled
  }
})

const sizeClass = computed(() => {
  return {
    [`z-switch--${props.size}`]: props.size,
  }
})

const coreStyle = computed(() => {
  let newColor = curChecked.value ? props.activeColor : props.inactiveColor
  return {
    backgroundColor: newColor
  }
})

const handleSwitch =() => {
  if(props.disabled) return
  curChecked.value = !curChecked.value
  emit('update:modelValue',curChecked.value)
  emit('change',curChecked.value)
}
</script>

<style lang="scss" scoped>
@import '../../styles/components/switch.scss';
</style>
