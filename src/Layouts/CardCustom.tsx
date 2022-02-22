import { Checkbox, Input } from 'antd'
import Card from 'antd/lib/card'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { IContentModel } from '../interfaces/interfaces'


export const CardCustom = observer(({ content }: { content: IContentModel }) => {

    const { title, description, notes, changeNotes, isSeen, changeSeen, seen } = content


    useEffect(() => {
        if (isSeen) {
            alert(`Is seen ${ title }`)
        }
    }, [ isSeen ])

    return (
        <Card title={ title } bordered={ false }>
            { description }

            <Input
                value={ notes }
                placeholder={ notes }
                onChange={ (e) => changeNotes(e.target.value) }
            />

            <Checkbox defaultChecked={ seen } checked={ seen } onChange={ (e) => changeSeen(e.target.checked) } />

        </Card>
    )

})