<template>
  <z-badge :value="12" class="item">
    <z-button size="small">评论</z-button>
  </z-badge>
  <z-badge :value="5" class="item">
    <z-button size="small">回复</z-button>
  </z-badge>
  <z-badge :value="12" class="item" type="primary">
    <z-button size="small">评论</z-button>
  </z-badge>
  <z-badge :value="12" class="item" type="warning">
    <z-button size="small">回复</z-button>
  </z-badge>

  <z-dropdown trigger="click" title="点我查看">
    <template #dropdown>
      <z-dropdown-menu>
        <z-dropdown-item class="clearfix">
          评论
          <z-badge :value="12" />
        </z-dropdown-item>
        <z-dropdown-item class="clearfix">
          回复
          <z-badge :value="5" />
        </z-dropdown-item>
      </z-dropdown-menu>
    </template>
  </z-dropdown>
</template>

<style>
.item {
  margin-right: 40px;
}
</style>