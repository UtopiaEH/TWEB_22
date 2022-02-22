import { types } from 'mobx-state-tree'

export const ContentModel = types.model('ContentModel', {
    id: types.identifier,
    title: '',
    description: '',
    seen: false,
    notes: ''
}).actions((self) => ({

    changeNotes(value: string) {
        self.notes = value
    }

}))


