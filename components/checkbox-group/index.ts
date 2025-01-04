import zCheckboxGroup from '../checkbox/src/checkbox-group.vue';

zCheckboxGroup.install = function(Vue:any) {
  Vue.component(zCheckboxGroup.name, zCheckboxGroup);
};

export default zCheckboxGroup;
