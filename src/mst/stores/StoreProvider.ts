import RootStore from './RootStore.store'

const storeProvider = RootStore.create({
    contents: [ { id: '' } ],
    forms_custom: {}

})

export default storeProvider