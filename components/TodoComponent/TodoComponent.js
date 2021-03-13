import { importHtml } from '/importer/importer.js'

export default {
  template: await importHtml( import.meta ),
}
