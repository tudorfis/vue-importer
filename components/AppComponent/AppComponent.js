import { importTemplate, importComponents } from '/importer/importer.js'

export default {
    template: await importTemplate( import.meta ),
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
    components: await importComponents([
        "friend-contact"
    ]),
}
