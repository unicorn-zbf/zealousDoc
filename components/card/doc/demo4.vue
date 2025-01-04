<template>
  <z-row :gutter="12">
    <z-col :span="8">
      <z-card shadow="always"> 总是显示 </z-card>
    </z-col>
    <z-col :span="8">
      <z-card shadow="hover"> 鼠标悬浮时显示 </z-card>
    </z-col>
    <z-col :span="8">
      <z-card shadow="never"> 从不显示 </z-card>
    </z-col>
  </z-row>
</template>