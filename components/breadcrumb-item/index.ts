import zBreadcrumbItem from '../breadcrumb/src/breadcrumb-item.vue';

zBreadcrumbItem.install = (Vue:any) => {
  Vue.component(zBreadcrumbItem.name,zBreadcrumbItem)
}

export default zBreadcrumbItem;