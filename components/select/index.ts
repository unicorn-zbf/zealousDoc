import zSelect from './src/index.vue';

zSelect.install = (Vue:any) => {
  Vue.component(zSelect.name, zSelect)
}

export default zSelect;
