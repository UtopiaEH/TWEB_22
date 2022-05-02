import { Tooltip } from 'antd'
import Card from 'antd/lib/card'
import { observer } from 'mobx-react-lite'
import { useDrag, useDrop } from 'react-dnd'
import { IContentModel } from '../interfaces/interfaces'

const style = {
    // border: '1px dashed gray',
    // padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
    margin: '5px'
}

export const CardCustom = observer(({
                                        content,
                                        changeArticlePosition,
                                        findCard
                                    }: { content: IContentModel, changeArticlePosition: any, findCard: any }) => {

    const { title, description } = content

    const originalIndex = findCard(content.id)

    const [ { isDragging }, drag ] = useDrag(() => ({
        type: 'article.CONTENT',
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
            accept: 'article.CONTENT',
            hover({ id: draggedId }: any) {
                if (draggedId !== content.id) {
                    const { index: overIndex } = findCard(content.id)
                    changeArticlePosition(draggedId, overIndex)
                }
            }
        }),
        [ findCard, changeArticlePosition ]
    )

    const opacity = isDragging ? 0 : 1

    return (
        <div
            ref={ (node) => drag(drop(node)) }
            style={ { ...style, opacity } }
        >
            <Card title={ <Tooltip title={ title }>{ title }</Tooltip> }>
                { description }
            </Card>
        </div>

    )

})