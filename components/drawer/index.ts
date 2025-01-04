import zDrawer from './index.vue';

zDrawer.install = (Vue:any) => {
  Vue.component(zDrawer.name,zDrawer)
}

export default zDrawer;
