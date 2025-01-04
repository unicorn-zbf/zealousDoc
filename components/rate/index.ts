import zRate from './index.vue';

zRate.install = (app:any) => {
  app.component(zRate.name, zRate)
}
export default zRate;