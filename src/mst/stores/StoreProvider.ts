import RootStore from './RootStore.store'


const storeProvider = RootStore.create({
    todos: [ {
        name: 'James Bond',
        done: false
    } ]
})

export default storeProvider

