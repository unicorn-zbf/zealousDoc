<template>
  <div class="demo-progress">
    <z-progress :percentage="50" />
    <z-progress :percentage="100" :format="format"></z-progress>
    <z-progress :percentage="100" status="success"></z-progress>
    <z-progress :percentage="100" status="warning"></z-progress>
    <z-progress :percentage="50" status="error"></z-progress>
  </div>
</template>

<script setup>
const format = (percentage) => (percentage === 100 ? '满' : `${percentage}%`)
</script>

<style scoped>
.demo-progress .z-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>