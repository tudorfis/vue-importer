
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
            // tudor: {
            //     name: 'tudor',
            //     age: {
            //         realAge: 31
            //     }
            // }
        }
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
        this.aFn.call({ asd: 'a' })
        return

        setInterval(_ => {
            this.friends.push({
                id: new Date().toISOString(),
                name: TDR.randomString(),
                phone: TDR.randomString(),
                email: TDR.randomString(),
            })
        }, 1000)
    },

    ////////////////////////

    /**
    setup: _ => ({ 
        'tudor': Vue.ref( '' )
    })
    */

    setup() { 
        const age = Vue.ref( 31 )
        const tudor = Vue.reactive({
            name: 'tudor',
            age: {
                realAge: 31
            }
        })
        const fruits = Vue.reactive([
            'banana',
            'apple',
            'peach'
        ])
        const aFn = Vue.reactive(function() {
            console.log( this.asd )
        })
        
        setTimeout( _ => {
            tudor.age.realAge = 50
            fruits.push( 'pinaple' )
            
            aFn.call({ asd: 'b' })

            console.log(age)
        }, 1500)

        return {
            age,
            tudor,
            fruits,
            aFn
        }
    }
}   
