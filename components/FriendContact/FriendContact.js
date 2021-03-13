import { importTemplate, importComponents } from '/importer/importer.js'

export default {
  template: await importTemplate( import.meta ),
  props: [ 'friend' ],
  data() {
    return {
      detailsAreVisible: false
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
  components: await importComponents([
    'todo-component',
  ])
};
