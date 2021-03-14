import { importTemplate, importComponents, importAllComponents } from './importer/importer.js'

const app = Vue.createApp({
  template: '<AppComponent />',
})

window.TDR = {
  importTemplate,
  importComponents  
}

await importAllComponents( app )
app.mount('#app')