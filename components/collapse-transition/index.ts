import zCollapseTransition from './transition.vue';

zCollapseTransition.install = function (Vue:any) {
  Vue.component(zCollapseTransition.name, zCollapseTransition);
};

export default zCollapseTransition;
