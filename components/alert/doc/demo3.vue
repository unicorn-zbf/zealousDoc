<template>
  <z-alert title="不可关闭的 alert" type="success" :closable="false"></z-alert>
  <z-alert title="自定义 close-text" type="info" close-text="关闭"></z-alert>
  <z-alert title="警告提示的文案" type="warning" @close="alertClose"></z-alert>
</template>

<script setup>
const alertClose = () => {
  console.log('点击了关闭');
}
</script>