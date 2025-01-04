import zProgress from './index.vue';

zProgress.install = (Vue:any) => {
  Vue.component(zProgress.name, zProgress)
}

export default zProgress;
