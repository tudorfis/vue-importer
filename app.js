import { importComponents } from './importer/importer.js'

console.log(Vue)
console.log(Vue.capitalize( 'asdada' ))

Vue.createApp({
  template: '<app-component></app-component>',
  components: await importComponents([ 'app-component' ])
}).mount('#app');