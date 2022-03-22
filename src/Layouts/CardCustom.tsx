import { Checkbox, Input, Tooltip } from 'antd'
import Card from 'antd/lib/card'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { IContentModel } from '../interfaces/interfaces'


export const CardCustom = observer(({ content }: { content: IContentModel }) => {

    const { title, description,  } = content


    // useEffect(() => {
    //     if (isSeen) {
    //         // alert(`Is seen ${ title }`)
    //         console.log(`>>${ title }`, title)
    //     }
    //
    // }, [ isSeen ])

    return (
        <Card title={ <Tooltip title={ title }>{ title }</Tooltip> } bordered={ false }>
            { description }

            {/*<Input*/ }
            {/*    value={ notes }*/ }
            {/*    placeholder={ notes }*/ }
            {/*    onChange={ (e) => changeNotes(e.target.value) }*/ }
            {/*/>*/ }

            {/*<Checkbox defaultChecked={ seen } checked={ seen } onChange={ (e) => changeSeen(e.target.checked) } />*/ }

        </Card>
    )

})