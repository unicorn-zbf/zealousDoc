import zTableColumn from '../table/src/table-column.vue';

zTableColumn.install = function(Vue:any) {
  Vue.component(zTableColumn.name, zTableColumn);
};

export default zTableColumn;
