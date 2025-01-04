import zMenu from './src/menu.vue';

zMenu.install = (Vue:any) => {
  Vue.component(zMenu.name, zMenu)
}

export default zMenu;
