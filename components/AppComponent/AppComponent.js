import { randomString } from '/utils/string.utils.js'

export default {
    template: await TDR.importTemplate( import.meta ),
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "01234 5678 991",
                    email: "manuel@localhost.com",
                },
                {
                    id: "julie",
                    name: "Julie Jones",
                    phone: "09876 543 221",
                    email: "julie@localhost.com",
                },
            ],
        };
    },
    provide() {
        return {
            friends: this.friends,
            deleteFriend: this.deleteFriend
        }
    },
    methods: {
        deleteFriend( friend ) {
            const friendIndex = this.friends.indexOf( friend );
            this.friends.splice( friendIndex, 1 )
        }
    },
    mounted() {
        // return

        setInterval(_ => {
            this.friends.push({
                id: new Date().toISOString(),
                name: randomString(),
                phone: randomString(),
                email: randomString(),
            })
        }, 1000)
    }
}   
