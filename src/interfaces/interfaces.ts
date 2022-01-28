import { Instance } from 'mobx-state-tree'
import RootStore from '../mst/stores/RootStore.store'


export interface IRootStore extends Instance<typeof RootStore> {
}