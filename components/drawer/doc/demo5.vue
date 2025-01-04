<template>
  <z-button @click="drawerShow=true">点击打开</z-button>

  <z-drawer 
    v-model="drawerShow" 
    custom-class="customClass"
    :wrapperClosable="false">
    <template #header>
      <i class="iconfont icon-email" style="font-size: 17px"></i> 新的邮件
    </template>
    <div>
      <z-input v-model="value" placeholder="请输入" clearable></z-input>
      <p>输入的值为：{{value}}</p>
    </div>
    <template #footer>
      <span class="drawer-footer">
        <z-button @click="drawerShow = false" style="margin-right: 20px">取消</z-button>
        <z-button type="primary" @click="drawerShow = false">确定</z-button>
      </span>
    </template>
  </z-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawerShow = ref(false);
const value = ref('');
</script>