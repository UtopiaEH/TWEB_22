import React from 'react'
import logo from './logo.svg'
import './App.css'

import { Layout } from 'antd'
import { HeaderLayout } from './Layouts/HeaderLayout'
import { ContentLayout } from './Layouts/ContentLayout'
import { Routes, Route } from 'react-router-dom'
import { ROUTS } from './Roouts'

function App() {
    return (
        <>
            <Layout className='layout'>
                <HeaderLayout />
                <Routes>
                    <Route path={ ROUTS[0].path } element={ <ContentLayout /> } />
                </Routes>
                {/*<ContentLayout />*/ }
            </Layout>
        </>
    )
}

export default App
