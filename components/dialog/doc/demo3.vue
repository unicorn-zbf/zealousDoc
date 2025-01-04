<template>
  <z-button @click="dialogVisible = true">自定义内容</z-button>
  <z-dialog
    v-model="dialogVisible"
    title="提示"
    width="30%"
  >
    <div>
      <z-input v-model="value" placeholder="请输入" clearable></z-input>
      <p>输入的值为：{{value}}</p>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <z-button @click="dialogVisible = false" style="margin-right: 20px">取消</z-button>
        <z-button type="primary" @click="dialogVisible = false">确定</z-button>
      </span>
    </template>
  </z-dialog>
</template>

<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)
const value = ref('')
</script>