import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { ROUTS } from '../Roouts'

const { Header } = Layout

export const HeaderLayout = () => {
    return (
        <Header>
            <div className='logo' />
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={ [ '2' ] }>
                { ROUTS.map((route) => {
                    return (
                        <Menu.Item key={ route.id }> <Link to={ route.path }>{ route.route_name }</Link></Menu.Item>
                    )
                }) }
            </Menu>
        </Header>
    )
}