import zCheckbox from './src/index.vue';

zCheckbox.install = (Vue:any) => {
  Vue.component(zCheckbox.name,zCheckbox)
}

export default zCheckbox;
