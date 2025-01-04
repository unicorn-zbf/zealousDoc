import zTextarea from './index.vue';

zTextarea.install = (Vue:any) => {
  Vue.component(zTextarea.name,zTextarea)
}

export default zTextarea;
