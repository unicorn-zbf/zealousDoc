import zTimePicker from './src/index.vue';

zTimePicker.install = (Vue:any) => {
  Vue.component(zTimePicker.name,zTimePicker)
}

export default zTimePicker;
