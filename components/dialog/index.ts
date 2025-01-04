import zDialog from './index.vue';

zDialog.install = (Vue:any) => {
  Vue.component(zDialog.name,zDialog)
}

export default zDialog;
