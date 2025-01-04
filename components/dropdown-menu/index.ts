import zDropdownMenu from '../dropdown/src/dropdown-menu.vue';

zDropdownMenu.install = function (Vue:any) {
  Vue.component(zDropdownMenu.name, zDropdownMenu);
};

export default zDropdownMenu;
