
export default {
  template: await TDR.importTemplate( import.meta ),
  components: await TDR.importComponents([
    'LoginButton',
    'LoginForm',
    'RegisterForm',
  ]),
  props: [ 
    'friend'
  ],
  inject: [
    'deleteFriend'
  ],
  mixins: await TDR.importMixins([
    'alertMixin'
  ]),
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
