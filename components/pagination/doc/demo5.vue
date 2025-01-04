<template>
  <z-pagination :total="200" show-sizer @size-change="handleSizeChange"></z-pagination>
</template>

<script setup>
const handleSizeChange = (val) => {
  console.log(val);
}
</script>
