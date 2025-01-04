import zMenuItem from '../menu/src/menu-item.vue';

zMenuItem.install = (Vue:any) => {
  Vue.component(zMenuItem.name, zMenuItem)
}

export default zMenuItem;
