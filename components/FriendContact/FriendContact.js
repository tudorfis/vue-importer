
export default {
  template: await TDR.importTemplate( import.meta ),
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
