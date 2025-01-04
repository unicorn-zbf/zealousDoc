<template>
  <z-checkbox-group v-model="checkList1" @change="checkChange">
    <z-checkbox label="复选框 A"></z-checkbox>
    <z-checkbox label="复选框 B"></z-checkbox>
    <z-checkbox label="复选框 C"></z-checkbox>
    <z-checkbox label="复选框 D" disabled></z-checkbox>
    <z-checkbox label="复选框 E" disabled></z-checkbox>
  </z-checkbox-group>
  <z-checkbox-group v-model="checkList2" style="margin-top:10px">
    <z-checkbox 
      v-for="(item,index) in checkOptions" 
      :key="index" 
      :label="item.label"
      :disabled="item.disabled">
    </z-checkbox>
  </z-checkbox-group>
</template>

<script setup>
import { reactive, ref } from 'vue'

const checkList1 = ref(['复选框 A', '复选框 E'])
const checkList2 = ref([])

const state = reactive({
  checkOptions:[
    {label:'复选框 A'},
    {label:'复选框 B'},
    {label:'复选框 C'},
    {label:'复选框 D',disabled:true},
    {label:'复选框 E',disabled:true}
  ]
})

const checkChange = (e) => {
  console.log(e);
}

const { checkOptions } = state;
</script>