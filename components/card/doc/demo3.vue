<template>
  <z-row>
    <z-col v-for="(item, index) in 2" :key="item" :span="8" :offset="index > 0 ? 2 : 0">
      <z-card :body-style="{ padding: '0px' }">
        <h2 style="padding:0 10px">这是一段标题</h2>
        <div style="padding: 14px">
          <span>卡片名称</span>
          <div class="bottom">
            <p>什么是快乐星球</p>
            <z-button class="button" type="text">操作按钮</z-button>
          </div>
        </div>
      </z-card>
    </z-col>
  </z-row>
</template>

<style>
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>