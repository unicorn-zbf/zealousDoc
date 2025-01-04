import zOption from '../select/src/option.vue';

zOption.install = function (Vue:any) {
  Vue.component(zOption.name, zOption);
};

export default zOption;
