
export default {
    template: await TDR.importTemplate( import.meta ),
    data() {
        return {
            opened: false
        }
    },
    methods: {
        closeDialog() {
            this.opened = false
        }
    }
}