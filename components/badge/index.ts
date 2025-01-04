import zBadge from './index.vue';

zBadge.install = (Vue:any) => {
  Vue.component(zBadge.name,zBadge)
}

export default zBadge;