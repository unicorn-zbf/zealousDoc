<template>
  <z-row>
    <z-col :span="8">
      <div class="col-box-1 col-box">8</div>
    </z-col>
    <z-col :span="8" :offset="8">
      <div class="col-box-1 col-box">8</div>
    </z-col>
  </z-row>
  <z-row>
    <z-col :span="2">
      <div class="col-box-2 col-box">2</div>
    </z-col>
    <z-col :span="6" :offset="4">
      <div class="col-box-1 col-box">6</div>
    </z-col>
    <z-col :span="6" :offset="6">
      <div class="col-box-2 col-box">6</div>
    </z-col>
  </z-row>
</template>

<style scoped>
.col-box {
  height: 35px;
  line-height: 35px;
  margin-bottom: 10px;
  text-align: center;
}

.col-box-1 {
  background-color: #d3dce6;
  color: #333;
}

.col-box-2 {
  background-color: #e5e9f2;
  color: #333;
}
</style>