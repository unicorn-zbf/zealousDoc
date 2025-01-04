import zTree from './src/index.vue';

zTree.install = (Vue:any) => {
  Vue.component(zTree.name,zTree)
}

export default zTree;
