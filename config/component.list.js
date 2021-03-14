export default {
    'app-component': _ => import( '/components/AppComponent/AppComponent.js' ),
    'friends-list': _ => import( '/components/FriendsList/FriendsList.js' ),
    'friend-contact': _ => import( '/components/FriendContact/FriendContact.js' ),
    'todo-component': _ => import( '/components/TodoComponent/TodoComponent.js' ),
}