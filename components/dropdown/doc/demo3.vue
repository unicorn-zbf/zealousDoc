<template>
  <z-dropdown title="hover 激活">
    <template #dropdown>
      <z-dropdown-menu>
        <z-dropdown-item>菜单1</z-dropdown-item>
        <z-dropdown-item>菜单2</z-dropdown-item>
        <z-dropdown-item>菜单3</z-dropdown-item>
        <z-dropdown-item>菜单4</z-dropdown-item>
        <z-dropdown-item>菜单5</z-dropdown-item>
      </z-dropdown-menu>
    </template>
  </z-dropdown>
  <z-dropdown title="click 激活" trigger="click" style="margin-left:50px">
    <template #dropdown>
      <z-dropdown-menu>
        <z-dropdown-item>菜单1</z-dropdown-item>
        <z-dropdown-item>菜单2</z-dropdown-item>
        <z-dropdown-item>菜单3</z-dropdown-item>
        <z-dropdown-item>菜单4</z-dropdown-item>
        <z-dropdown-item>菜单5</z-dropdown-item>
      </z-dropdown-menu>
    </template>
  </z-dropdown>
</template>