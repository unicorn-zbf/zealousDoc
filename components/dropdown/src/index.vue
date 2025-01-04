<template>
  <div class="z-dropdown" :class="[{ 'is-disabled': disabled }]" @mouseover="mouseover" @mouseleave="mouseleave"
    @click="handleClick">
    <div class="z-dropdown-link">
      <slot name="img"></slot>
      <span>{{ title }}</span>
      <i class="iconfont icon-arrow-down"></i>
    </div>
    <transition>
      <div v-if="isShow">
        <slot name="dropdown" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "zDropdown"
};
</script>

<script setup>
import { ref, nextTick, provide } from 'vue'
const emit = defineEmits(['change'])
const props = defineProps({
  title: String,
  trigger: {
    type: String,
    default: "hover"
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const isShow = ref(false)

const mouseover = () => {
  if (props.disabled) return;
  if (props.trigger == 'hover') {
    isShow.value = true
  }
}
const mouseleave = () => {
  if (props.disabled) return;
  if (props.trigger == 'hover') {
    isShow.value = false
  }
}
const handleClick = (e) => {
  if (props.disabled) return;
  if (props.trigger == 'click') {
    isShow.value = !isShow.value
  }
}

const changeEvent = (value) => {
  isShow.value = false
  nextTick(() => emit('change', value))
}
provide('changeEvent', changeEvent)

</script>

<style lang="scss" scoped>
.z-dropdown {
  display: inline-block;
  position: relative;
  color: #606266;
  font-size: 14px;
  text-align: center;
  user-select: none;

  .z-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    line-height: 35px;
  }

  .z-dropdown-link :slotted(img) {
    width: 35px;
    height: 35px;
    float: left;
    border-radius: 50%;
    margin-right: 5px;
  }

  .icon-arrow-down {
    margin-left: 5px;
  }
}

.is-disabled {
  .z-dropdown-link {
    cursor: no-drop;
    color: #c0c4cc;
  }
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: .5;
}
</style>
