import { Breadcrumb, Layout, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { Routes, Route } from 'react-router-dom'
import { CustomForm } from '../components/CustomForm/CustomForm'
import { ROUTES } from '../Routes/Rourtes'
import { Articles } from './Articles/Articles'

const { Footer } = Layout

export const ContentLayout = () => {


    return (
        <>
            <Content style={ { padding: '0 50px' } }>
                <Breadcrumb style={ { margin: '16px 0' } }>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className='site-layout-content'>

                    <Routes>
                        <Route path={ ROUTES[0].path } />
                        <Route path={ ROUTES[1].path } element={ <Articles /> } />
                        <Route path={ ROUTES[3].path } element={ <CustomForm /> } />
                    </Routes>
                </div>
            </Content>
            <Footer style={ { textAlign: 'center' } }>Ant Design ©2018 Created by Ant UED</Footer>
        </>

    )
}