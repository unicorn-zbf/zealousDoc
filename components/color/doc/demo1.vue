<template>
    <div class="z-color__section">
        <div class="z-color__top" :style="{backgroundColor: state.currentColor}">
            <p class="z-color__title">Brand Color</p>
            <p class="z-color__desc">{{state.currentColor}}</p>
        </div>
        <div class="z-color__bottom">
            <div @click="zColorItemAction(index)" :style="{backgroundColor: item}" v-for="(item, index) in state.colorList" :key="index" class="z-color__item"></div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const state = reactive({
    currentColor: '#409EFF',
    colorList: ['#409EFF', '#337ECC', '#79BBFF', '#A0CFFF', '#C6E2FF', '#D9ECFF', '#ECF5FF']
})

const zColorItemAction = (index) => {
    state.currentColor = state.colorList[index];
}
</script>

<style lang="scss" scoped>
.z-color__section {
    width: 326px;
    height: 112px;
    border-radius: 5px;

    .z-color__top {
        color: #fff;
        height: 60%;
        padding: 10px 0 0 20px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        .z-color__title {
            font-size: 16px;
        }

        .z-color__desc {
            font-size: 14px;
        }
    }

    .z-color__bottom {
        height: 40%;
        display: flex;

        .z-color__item {
            width: calc(100% / 7);
            cursor: pointer;
        }
    }
}
</style>