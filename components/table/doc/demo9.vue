<template>
  <z-table
    ref="singleTableRef"
    :data="tableData" 
    highlight-current-row
    @on-current-change="handleCurrentChange">
    <z-table-column type="index" width="55" />
    <z-table-column prop="date" label="日期" />
    <z-table-column prop="name" label="姓名" />
    <z-table-column prop="address" label="地址" />
  </z-table>
  <div style="margin-top: 20px">
    <z-button @click="handleClearCurrentRow">取消选择</z-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const singleTableRef = ref(null)

const tableData = [
  {
    date: '2022-05-12',
    name: '后裔',
    address: '王者峡谷下塔旁'
  }, 
  {
    date: '2022-06-13',
    name: '鲁班',
    address: '在逛街'
  }, 
  {
    date: '2022-07-14',
    name: '孙尚香',
    address: '在打红buff'
  }, 
  {
    date: '2022-08-15',
    name: '狄仁杰',
    address: '在推塔'
  }
]

const handleCurrentChange = (val) => {
  console.log(val);
}

const handleClearCurrentRow = () => {
  singleTableRef.value.clearCurrentRow()
}
</script>