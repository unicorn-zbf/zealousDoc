<template>
  <z-button @click="dialogVisible = true">点击打开 Dialog</z-button>
  <z-dialog
    v-model="dialogVisible"
    title="提示"
    width="30%"
    center
  >
    <span>需要注意的是内容是默认不居中的</span>
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
</script>