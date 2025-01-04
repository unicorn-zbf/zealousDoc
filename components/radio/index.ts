import zRadio from './src/index.vue';

zRadio.install = (Vue:any) => {
  Vue.component(zRadio.name, zRadio)
}

export default zRadio;
