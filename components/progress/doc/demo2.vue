<template>
  <div class="demo-progress">
    <z-progress :text-inside="true" :stroke-width="26" :percentage="70" />
    <z-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" />
    <z-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" />
    <z-progress :text-inside="true" :stroke-width="20" :percentage="50" status="error" />
  </div>
</template>

<style scoped>
.demo-progress .z-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>