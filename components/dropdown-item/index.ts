import zDropdownItem from '../dropdown/src/dropdown-item.vue';

zDropdownItem.install = function(Vue:any) {
  Vue.component(zDropdownItem.name, zDropdownItem);
};

export default zDropdownItem;
