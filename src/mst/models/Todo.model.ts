import { types } from 'mobx-state-tree'


export const Todo = types.model('Todo', {
    name: '',
    done: false
})