<template>
    <button class="z-button" :class="zClass" :round="round" @click="handleClick">
        <i class="iconfont icon-loading" v-if="loading"></i>
        <i :class="isIconClass" v-if="leftIcon && !loading"></i>
        <span ref="slotRef" :style="slotStyle" :class="isHaveSlot ? 'noText' : ''">
            <slot></slot>
        </span>
        <i :class="isIconClass" v-if="rightIcon"></i>
    </button>
</template>
<script lang="ts">
export default {
    name: 'zButton'
};
</script>
<script lang="ts" setup>
import { ref, reactive, computed, watch, nextTick, onMounted } from "vue";
const props = defineProps({
    type: {
        type: String,
        default: 'default',
        validator(value:any) {
            return ['default', 'primary', 'success', 'info', 'warning', 'error', 'text'].indexOf(value) > -1;
        }
    },
    round: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: "default"
    },
    loading: {
        type: Boolean,
        default: false
    },
    leftIcon: {
        type: String,
        default: ""
    },
    rightIcon: {
        type: String,
        default: ""
    },
});
const emits = defineEmits(['click'])
const slotRef:any= ref(null)
const isHaveSlot:any = ref(null)
const zClass = computed(() => {
    return {
        [`z-button--${props.type}`]: props.type,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-disabled': props.loading ? true : props.disabled,
        [`z-button--${props.size}`]: props.size
    }
});
const isIconClass = computed(() => {
    return [
        'iconfont',
        props.leftIcon || props.rightIcon
    ]
})
const slotStyle = computed(() => {
    return {
        'margin-left': props.leftIcon ? '4px' : '0',
        'margin-right': props.rightIcon ? '4px' : '0'
    }
})
const handleClick = (e:any) => {
    emits('click')
}
onMounted(() => {
    if (!slotRef?.value.innerText) {
        isHaveSlot.value = true
    }
})
</script>

<style scoped lang="scss">
@import '../../styles/components/button.scss';
</style>