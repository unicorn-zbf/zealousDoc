import zTag from './index.vue';

zTag.install = (Vue:any) => {
  Vue.component(zTag.name,zTag)
}

export default zTag;
