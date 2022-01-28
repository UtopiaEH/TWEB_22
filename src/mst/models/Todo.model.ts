import { types } from 'mobx-state-tree'


export const TodoModel = types.model('TodoModel', {
    name: '',
    done: false
})

