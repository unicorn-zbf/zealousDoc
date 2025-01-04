import zPagination from './src/index.vue';

zPagination.install = (Vue:any) => {
  Vue.component(zPagination.name, zPagination)
}

export default zPagination;
