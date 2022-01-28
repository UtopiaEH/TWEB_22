import { types } from 'mobx-state-tree'
import { TodoModel } from '../models/Todo.model'


export const RootStore = types.model('RootStore', {
    todos: types.array(TodoModel)
})

