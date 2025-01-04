<template>
  <z-row>
    <z-col>
      <div class="bg-purple-dark col-box">24</div>
    </z-col>
  </z-row>
  <z-row>
    <z-col :span="12">
      <div class="col-box-2 col-box">12</div>
    </z-col>
    <z-col :span="12">
      <div class="col-box-1 col-box">12</div>
    </z-col>
  </z-row>
  <z-row>
    <z-col :span="8">
      <div class="col-box-1 col-box">8</div>
    </z-col>
    <z-col :span="8">
      <div class="col-box-2 col-box">8</div>
    </z-col>
    <z-col :span="8">
      <div class="col-box-1 col-box">8</div>
    </z-col>
  </z-row>
  <z-row>
    <z-col :span="6">
      <div class="col-box-2 col-box">6</div>
    </z-col>
    <z-col :span="6">
      <div class="col-box-1 col-box">6</div>
    </z-col>
    <z-col :span="6">
      <div class="col-box-2 col-box">6</div>
    </z-col>
    <z-col :span="6">
      <div class="col-box-1 col-box">6</div>
    </z-col>
  </z-row>
</template>

<style scoped>
.bg-purple-dark {
  background: #99a9bf;
}

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