import { v4 as uuid } from 'uuid'

export const ROUTES = [
    {
        id: uuid(),
        path: '/home',
        name: 'Home'
    },
    {
        id: uuid(),
        path: '/articles',
        name: 'Articles'
    },
    {
        id: uuid(),
        path: '/login',
        name: 'Login'
    },
    {
        id: uuid(),
        path: '/forms',
        name: 'Form'
    }

]