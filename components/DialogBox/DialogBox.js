
export default {
    template: await TDR.importTemplate( import.meta ),
    data() {
        return {
            opened: true
        }
    },
    methods: {
        closeDialog() {
            this.opened = false
        }
    }
}