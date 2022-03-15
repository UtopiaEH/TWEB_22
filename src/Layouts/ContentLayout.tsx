import { Breadcrumb, Layout, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { useRootStore } from '../index'
import { IContentModel } from '../interfaces/interfaces'
import { CardCustom } from './CardCustom'

const { Footer } = Layout

export const ContentLayout = () => {

    const { contents } = useRootStore()

    return (
        <>
            <Content style={ { padding: '0 50px' } }>
                <Breadcrumb style={ { margin: '16px 0' } }>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className='site-layout-content'>
                    <Row gutter={ 16 }>
                        { contents.map((content: IContentModel) => {
                            return (
                                <CardCustom key={ content.id } content={ content } />
                            )
                        }) }

                    </Row>

                </div>
            </Content>
            <Footer style={ { textAlign: 'center' } }>Ant Design ©2018 Created by Ant UED</Footer>
        </>

    )
}