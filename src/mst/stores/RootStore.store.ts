import { types } from 'mobx-state-tree'
import { Todo } from '../models/Todo.model'

const RootStore = types.model('RootStore', {
    todos: types.array(Todo)
})

export default RootStore