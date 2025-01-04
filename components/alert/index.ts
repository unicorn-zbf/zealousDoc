import zAlert from './index.vue';

zAlert.install = (Vue:any) => {
  Vue.component(zAlert.name,zAlert)
}

export default zAlert;
