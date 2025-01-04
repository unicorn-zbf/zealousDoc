import zTable from './src/index.vue';

zTable.install = (Vue:any) => {
  Vue.component(zTable.name,zTable)
}

export default zTable;
