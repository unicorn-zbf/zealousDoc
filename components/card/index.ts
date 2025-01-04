import zCard from './index.vue';

zCard.install = (Vue:any) => {
  Vue.component(zCard.name, zCard)
}

export default zCard;
