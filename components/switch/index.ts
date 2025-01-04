import zSwitch from './index.vue';

zSwitch.install = (Vue:any) => {
  Vue.component(zSwitch.name,zSwitch)
}

export default zSwitch;
