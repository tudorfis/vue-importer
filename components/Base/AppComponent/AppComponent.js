
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
        }
    },
    computed: {
        ...Vuex.mapGetters( [ 'counter' ] )
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
        },
        ...Vuex.mapActions( [ 'increment' ])
    },
    setup() {
        const tudor = Vue.reactive({
            name: 'tudor',
            age: 31
        })

        const fruits = Vue.reactive([
            'banana',
            'apple',
            'peach'
        ])

        const tudorAndName = Vue.computed({
            get() {
                return `${ tudor.name } - ${ tudor.age }`
            },
            set( value ) {
                tudor.name = value.split(' - ')[0]
                tudor.age = +value.split(' - ')[1]
            }
        })

        function setNewAge() {
            tudor.age = 50
        }

        function setNewTudorAndAge() {
            tudorAndName.value = 'cristina - 34'
        }

        function addRandomFruit() {
            fruits.push( TDR.randomString() )
        }

        Vue.watch([ tudor, fruits ], (newValue, oldValue) => {
            const [ , fruits ] = newValue
        })

        Vue.onBeforeMount(_ => console.log( 'onBeforeMount'))
        Vue.onMounted(_ => console.log( 'mount'))

        const store = Vuex.useStore()
            
        console.log( store )
        function inc() {
            store.dispatch( 'increment' )
        }

        const count = Vue.computed(_ => store.getters[ 'counter' ])

        return {
            tudor,
            fruits,
            tudorAndName,
            setNewAge,
            setNewTudorAndAge,
            addRandomFruit,
            inc,
            count
        }
    }
}   
