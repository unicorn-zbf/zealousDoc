import zDropdown from './src/index.vue';

zDropdown.install = (Vue:any) => {
  Vue.component(zDropdown.name, zDropdown)
}

export default zDropdown;
