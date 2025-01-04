import mLink from './index.vue'
mLink.install = (app:any) => {
  app.component(mLink.name, mLink)
} 
export default mLink;