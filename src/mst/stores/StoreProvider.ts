import { types } from 'mobx-state-tree'
import { ContentModel } from '../models/Content.model'
import RootStore, { FormCustom } from './RootStore.store'

const storeProvider = RootStore.create({
    contents: types.array(ContentModel),
    forms_custom: types.optional(FormCustom, {})

})

export default storeProvider