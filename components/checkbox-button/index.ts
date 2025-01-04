import zCheckboxButton from '../checkbox/src/checkbox-button.vue';

zCheckboxButton.install = function(Vue:any) {
  Vue.component(zCheckboxButton.name, zCheckboxButton);
};

export default zCheckboxButton;
