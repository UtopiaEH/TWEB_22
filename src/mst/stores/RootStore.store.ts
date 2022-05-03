import { notification } from 'antd'
import axios from 'axios'
import update from 'immutability-helper'
import { flow } from 'mobx'
import { types } from 'mobx-state-tree'
import { ContentModel } from '../models/Content.model'


export const FormCustom = types.model('FormCustom', {
    name: '',
    age: 0,
    intro: ''
}).actions((self) => ({
    setName(name: string): void {
        self.name = name
    },
    setAge(age: string): void {
        self.age = Number(age)
    },
    setIntro(intro: string): void {
        self.intro = intro
    },
    submitForm() {
        console.log('>>self', self)
    }

})).views((self) => ({
    get getAge() {
        return String(self.age)
    }

}))

const RootStore = types.model('RootStore', {
    contents: types.array(ContentModel),
    forms_custom: FormCustom
})
    .views((self) => ({
        findContent(id: string) {
            const content = self.contents.filter((c: any) => c.id === id)[0]
            return {
                content,
                index: self.contents.indexOf(content)
            }
        }
    }))
    .actions((self) => ({

        changeContentPosition(id: string, atIndex: number) {
            const { content, index } = self.findContent(id)

            self.contents = update(self.contents, {
                $splice: [
                    [ index, 1 ],
                    [ atIndex, 0, content ]
                ]
            })

        },

        makeSnapshotContents(sn: any) {

            self.contents = sn.slice(0, 30).map((item: any, index: number) => {
                return {
                    id: String(index),
                    title: item.API,
                    description: item.Description,
                    link: item.Link,
                    category: item.Category
                }
            })

        }
    }))
    .actions((self) => ({
        fetchContents: flow(function* () {
            try {
                const res = yield axios.get('https://api.publicapis.org/entries')
                self.makeSnapshotContents(res.data.entries)
            } catch (e: any) {
                console.log('error', e)
                notification.error({ message: e.message })
            }
        })


    }))


export default RootStore

export const contests$ = [ { id: '' } ]
