<template>
  <div class="demo-progress">
    <z-progress type="circle" :percentage="0" />
    <z-progress type="circle" :percentage="25" />
    <z-progress type="circle" :percentage="100" status="success" />
    <z-progress type="circle" :percentage="70" status="warning" />
    <z-progress type="circle" :percentage="50" status="error" />
  </div>
</template>

<style scoped>
.demo-progress .z-progress--circle {
  margin-right: 15px;
}
</style>