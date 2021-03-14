
export default {
  template: await importTemplate( import.meta ),
  props: [ 'friend' ],
  inject: [ 'deleteFriend' ],
  data() {
    return {
      detailsAreVisible: false
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  }
};
