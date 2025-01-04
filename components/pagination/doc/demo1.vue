<template>
  <div>
    <span>页数较少时的效果</span>
    <z-pagination :total="50"></z-pagination>
  </div>
  <div>
    <span>页数较多时的效果</span>
    <z-pagination :total="200"></z-pagination>
  </div>
</template>