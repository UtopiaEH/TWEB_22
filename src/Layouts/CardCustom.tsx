import { Tooltip } from 'antd'
import Card from 'antd/lib/card'
import { observer } from 'mobx-react-lite'
import { useDrag, useDrop } from 'react-dnd'
import { useRootStore } from '../index'
import { IContentModel } from '../interfaces/interfaces'

const style = {
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
    margin: '5px'
}

export const CardCustom = observer(({ content }: { content: IContentModel, }) => {

    const { changeContentPosition, findContent } = useRootStore()

    const { title, description } = content

    const originalIndex = findContent(content.id)

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
                changeContentPosition(id, originalIndex)
            }
        }
    }), [ content.id, originalIndex, changeContentPosition ])

    const [ , drop ] = useDrop(
        () => ({
            accept: 'article.CONTENT',
            hover({ id: draggedId }: any) {
                if (draggedId !== content.id) {
                    const { index: overIndex } = findContent(content.id)
                    changeContentPosition(draggedId, overIndex)
                }
            }
        }),
        [ findContent, changeContentPosition ]
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