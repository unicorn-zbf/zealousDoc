import zTabPane from '../tabs/src/tab-pane.vue';

zTabPane.install = (Vue:any) => {
  Vue.component(zTabPane.name,zTabPane)
}

export default zTabPane;
