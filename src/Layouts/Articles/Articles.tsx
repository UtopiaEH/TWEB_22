import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { useRootStore } from '../../index'
import { IContentModel } from '../../interfaces/interfaces'
import { CardCustom } from '../CardCustom'


export const Articles = () => {
    const { contents } = useRootStore()


    useEffect(() => {
        return () => {
            console.log('>>UnMount')
        }
    })

    return (
        <Row gutter={ 16 }>
            {
                contents.map((content: IContentModel) => {
                    return (
                        <Col className='gutter-row' span={ 6 }>
                            <CardCustom key={ content.id } content={ content } />
                        </Col>
                    )
                })
            }
        </Row>


    )
}

