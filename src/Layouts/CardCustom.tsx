import { Tooltip } from 'antd'
import Card from 'antd/lib/card'
import { observer } from 'mobx-react-lite'
import { useDrag, useDrop } from 'react-dnd'
import { IContentModel } from '../interfaces/interfaces'


export const CardCustom = observer(({
                                        content,
                                        changeArticlePosition,
                                        findCard
                                    }: { content: IContentModel, changeArticlePosition: any, findCard: any }) => {

    const { title, description } = content

    const originalIndex = findCard(content.id)

    const [ { isDragging }, drag ] = useDrag(() => ({
        type: 'article',
        item: {
            id: content.id,
            originalIndex
        },
        collect: (monitor) => {
            return {
                isDragging: !!monitor.isDragging()
            }
        },
        end: (item, monitor) => {
            const { id, originalIndex } = item
            const didDrop = monitor.didDrop()
            if (!didDrop) {
                changeArticlePosition(id, originalIndex)
            }
        }
    }), [ content.id, originalIndex, changeArticlePosition ])

    const [ , drop ] = useDrop(
        () => ({
            accept: 'article',
            hover(item: any) {
                console.log('>>item', item)
                if (item.id !== content.id) {
                    const { index: overIndex } = findCard(item.id)
                    changeArticlePosition(item.id, overIndex)
                }
            }
        }),
        [ findCard, changeArticlePosition ]
    )

    const opacity = isDragging ? 0 : 1

    return (
        <div
            ref={ (node) => drag(drop(node)) }
            style={ {
                opacity
            } }>
            <Card title={ <Tooltip title={ title }>{ title }</Tooltip> } bordered={ false }>
                { description }
            </Card>
        </div>

    )

})