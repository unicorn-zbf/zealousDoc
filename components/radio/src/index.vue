<template>
  <label class="z-radio" :class="[
    { 'is-disabled': isDisabled },
    { 'is-checked': selVal == label },
    { 'is-bordered': border },
  ]">
    <span class="z-radio__input" :class="{
      'is-checked': selVal == label,
      'is-disabled': isDisabled
    }">
      <span class="z-radio__inner"></span>
      <input class="z-radio__original" type="radio" :name="name" v-model="selVal" :value="label" :disabled="isDisabled"
        @change="handleChange">
    </span>

    <span class="z-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "zRadio"
};
</script>

<script setup>
import { ref, nextTick, computed, inject } from 'vue'

const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
  name: String,
  modelValue: String | Number,
  label: String | Number,
  disabled: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  }
})

const radioGroup = inject('radioGroup', '');
const changeEvent = inject('changeEvent', '');
const isGroup = computed(() => {
  return radioGroup
})

const selVal = computed({
  get() {
    return isGroup.value ? radioGroup.val.value : props.modelValue
  },
  set(val) {
    if (isGroup.value) {
      changeEvent(val)
    } else {
      emit('update:modelValue', val)
    }
  }
})

const isDisabled = computed(() => {
  return isGroup.value ? radioGroup.disabled.value || props.disabled : props.disabled
})

const handleChange = () => {
  nextTick(() => emit('change', selVal.value))
}

</script>

<style lang="scss" scoped>
@import '../../../styles/components/radio.scss';
</style>
