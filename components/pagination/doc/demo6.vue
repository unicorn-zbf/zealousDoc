<template>
  <z-pagination :total="200" show-elevator @current-change="handleCurrentChange">
  </z-pagination>
</template>


<script setup>
const handleCurrentChange = (val) => {
  console.log(val);
}
</script>