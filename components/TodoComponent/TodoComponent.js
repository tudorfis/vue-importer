import { importTemplate } from '/importer/importer.js'

export default {
  template: await importTemplate( import.meta ),
}
