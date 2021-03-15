
import { importTemplate, importComponents, importMixins, importBaseComponents } from './importer/importer.js'
import { randomString, randomNumber } from '/utils/string.utils.js'
import store from './store/store.js'


const app = Vue.createApp({
  template: '<AppComponent />',
})

app.use(store);

window.TDR = {
  importTemplate,
  importComponents,
  importMixins,
  randomString,
  randomNumber
}

await importBaseComponents( app )
app.mount('#app')