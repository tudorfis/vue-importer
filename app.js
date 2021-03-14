import { importTemplate, importAllComponents } from './importer/importer.js'

const app = Vue.createApp({
  template: '<app-component />',
})

window.importTemplate = importTemplate
await importAllComponents( app )

app.mount('#app')