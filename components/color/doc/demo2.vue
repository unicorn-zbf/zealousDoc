<template>
    <div class="z-color__list">
        <div class="z-color__section">
            <div class="z-color__top" :style="{ backgroundColor: state1.currentColor }">
                <p class="z-color__title">Brand Color</p>
                <p class="z-color__desc">{{ state1.currentColor }}</p>
            </div>
            <div class="z-color__bottom">
                <div @click="zColorItemAction1(index)" :style="{ backgroundColor: item }"
                    v-for="(item, index) in state1.colorList" :key="index" class="z-color__item"></div>
            </div>
        </div>
        <div class="z-color__section">
            <div class="z-color__top" :style="{ backgroundColor: state2.currentColor }">
                <p class="z-color__title">Brand Color</p>
                <p class="z-color__desc">{{ state2.currentColor }}</p>
            </div>
            <div class="z-color__bottom">
                <div @click="zColorItemAction2(index)" :style="{ backgroundColor: item }"
                    v-for="(item, index) in state2.colorList" :key="index" class="z-color__item"></div>
            </div>
        </div>
         <div class="z-color__section">
            <div class="z-color__top" :style="{ backgroundColor: state3.currentColor }">
                <p class="z-color__title">Brand Color</p>
                <p class="z-color__desc">{{ state3.currentColor }}</p>
            </div>
            <div class="z-color__bottom">
                <div @click="zColorItemAction3(index)" :style="{ backgroundColor: item }"
                    v-for="(item, index) in state3.colorList" :key="index" class="z-color__item"></div>
            </div>
        </div>
         <div class="z-color__section">
            <div class="z-color__top" :style="{ backgroundColor: state4.currentColor }">
                <p class="z-color__title">Brand Color</p>
                <p class="z-color__desc">{{ state4.currentColor }}</p>
            </div>
            <div class="z-color__bottom">
                <div @click="zColorItemAction4(index)" :style="{ backgroundColor: item }"
                    v-for="(item, index) in state4.colorList" :key="index" class="z-color__item"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const state1 = reactive({
    currentColor: '#67C23A',
    colorList: ['#67C23A', '#529B2E', '#95D475', '#B3E19D', '#D1EDC4', '#E1F3D8', '#F0F9EB']
})

const state2 = reactive({
    currentColor: '#E6A23C',
    colorList: ['#E6A23C', '#B88230', '#EEBE77', '#F3D19E', '#F8E3C5', '#FAECD8', '#FDF6EC']
})

const state3 = reactive({
    currentColor: '#F56C6C',
    colorList: ['#F56C6C', '#C45656', '#F89898', '#FAB6B6', '#FCD3D3', '#FDE2E2', '#FEF0F0']
})

const state4 = reactive({
    currentColor: '#909399',
    colorList: ['#909399', '#73767A', '#B1B3B8', '#C8C9CC', '#DEDFE0', '#E9E9EB', '#F4F4F5']
})

const zColorItemAction1 = (index) => {
    state1.currentColor = state1.colorList[index];
}
const zColorItemAction2 = (index) => {
    state2.currentColor = state2.colorList[index];
}
const zColorItemAction3 = (index) => {
    state3.currentColor = state3.colorList[index];
}
const zColorItemAction4 = (index) => {
    state4.currentColor = state4.colorList[index];
}
</script>

<style lang="scss" scoped>
.z-color__list {
    display: flex;

    .z-color__section {
        width: 210px;
        height: 112px;
        border-radius: 5px;
        margin-left: 20px;

        &:first-child {
            margin-left: 0px;
        }

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
}
</style>