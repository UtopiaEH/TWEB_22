import React, { useEffect } from 'react'
import { useRootStore } from './index'
import './App.css'

import { Layout } from 'antd'
import { HeaderLayout } from './Layouts/HeaderLayout'
import { ContentLayout } from './Layouts/ContentLayout'

function App() {

    const { fetchContents } = useRootStore()

    useEffect(() => {
        fetchContents()
    }, [])

    return (
        <>
            <Layout className='layout'>
                <HeaderLayout />
                <ContentLayout />
            </Layout>
        </>
    )
}

export default App
