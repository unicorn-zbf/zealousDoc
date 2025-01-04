import zCol from './index.vue';

zCol.install = (Vue:any) => {
  Vue.component(zCol.name, zCol)
}

export default zCol;