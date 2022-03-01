import { types } from 'mobx-state-tree'
import { ContentModel } from '../models/Content.model'


const RootStore = types.model('RootStore', {
    contents: types.array(ContentModel)
})
    .actions(() => ({
        setDataToLocalStorage(value: any = {}) {
            localStorage.setItem('initialState', JSON.stringify(value))
        },

        getDataFromLocalStorage(key: string = 'initialState') {
            return localStorage.getItem(key)
        },

        removeLocalStorage(key: string = 'initialState') {
            localStorage.removeItem(key)
            console.log(`>>${ key } was removed`)
        }

    }))

export default RootStore