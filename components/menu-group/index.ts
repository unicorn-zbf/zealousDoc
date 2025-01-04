import zMenuGroup from '../menu/src/menu-group.vue';

zMenuGroup.install = (Vue:any) => {
  Vue.component(zMenuGroup.name, zMenuGroup)
}

export default zMenuGroup;
