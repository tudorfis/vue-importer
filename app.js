
import { importTemplate, importComponents, importAllComponents } from './importer/importer.js'
import { randomString, randomNumber } from '/utils/string.utils.js'

const app = Vue.createApp({
  template: '<AppComponent />',
})


window.TDR = {
  importTemplate,
  importComponents,
  randomString,
  randomNumber
}

await importAllComponents( app )
app.mount('#app')