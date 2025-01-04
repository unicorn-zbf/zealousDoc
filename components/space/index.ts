import zSpace from "./index.vue";
zSpace.install = (app:any) => {
  app.component(zSpace.name, zSpace);
};
export default zSpace;
