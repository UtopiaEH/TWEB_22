import RootStore, { contests$ } from './RootStore.store'

const storeProvider = RootStore.create({
    contents: contests$,
    forms_custom: {}

})

export default storeProvider