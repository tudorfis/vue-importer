import { importComponents } from './importer/importer.js'

Vue.createApp({
  template: '<app-component></app-component>',
  components: await importComponents([ 'app-component' ])
}).mount('#app');