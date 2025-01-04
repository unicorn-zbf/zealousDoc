<template>
  <z-button @click="dialogVisible = true">点击打开 Dialog</z-button>
  <z-dialog
    v-model="dialogVisible"
    title="提示"
    width="30%"
    :close-on-click-modal="false"
    @open="open"
  >
    <span>这是一段信息</span>
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
const open = () => {
  console.log('111');
}
</script>