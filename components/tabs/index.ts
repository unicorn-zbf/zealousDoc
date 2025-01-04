import zTabs from './src/index.vue';

zTabs.install = (Vue:any) => {
  Vue.component(zTabs.name,zTabs)
}

export default zTabs;
