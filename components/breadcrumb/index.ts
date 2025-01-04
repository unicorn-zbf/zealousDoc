import zBreadcrumb from './src/index.vue';

zBreadcrumb.install = (Vue:any) => {
  Vue.component(zBreadcrumb.name,zBreadcrumb)
}

export default zBreadcrumb;
