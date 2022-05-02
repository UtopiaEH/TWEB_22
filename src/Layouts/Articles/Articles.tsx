import { Row } from 'antd'
import { observer } from 'mobx-react'
import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import { useRootStore } from '../../index'
import { IContentModel } from '../../interfaces/interfaces'
import { CardCustom } from '../CardCustom'
import update from 'immutability-helper'


export const Articles = observer(() => {
    const { contents } = useRootStore()

    const [ cards, setCards ] = useState(contents)

    const findCard = useCallback(
        (id: string) => {
            const content = cards.filter((c: any) => c.id === id)[0]
            return {
                content: content,
                index: cards.indexOf(content)
            }
        },
        [ cards ]
    )

    const changeArticlePosition = useCallback(
        (id: string, atIndex: number) => {
            const { content, index } = findCard(id)
            setCards(
                update(cards, {
                    $splice: [
                        [ index, 1 ],
                        [ atIndex, 0, content ]
                    ]
                })
            )
        },
        [ findCard, cards, setCards ]
    )
    const [ , drop ] = useDrop(() => ({ accept: 'article' }))

    return (
        <div
            ref={ drop }
            style={ {
                display: 'flex',
                justifyContent: 'center'
            } }>
            <Row gutter={ 16 }>
                {
                    cards.map((content: IContentModel, index: number) => {
                        return (
                            <div style={ {
                                margin: 5
                            } }
                                 key={ index }

                            >
                                <CardCustom
                                    content={ content }
                                    changeArticlePosition={ changeArticlePosition }
                                    findCard={ findCard }
                                />
                            </div>
                        )
                    })
                }
            </Row>

        </div>

    )
})

