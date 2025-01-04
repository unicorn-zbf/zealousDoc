import zSubmenu from '../menu/src/sub-menu.vue';

zSubmenu.install = (Vue:any) => {
  Vue.component(zSubmenu.name, zSubmenu)
}

export default zSubmenu;
