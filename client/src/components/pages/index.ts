
import React from 'react'

export const HOME_ROUTE = '/'
export const LOGIN_ROUTE = '/login'
export const REGISTRATION_ROUTE = '/registration'
export const ACCOUNT_ROUTE = '/account'
export const CHATS_ROUTE = '/chats'
export const SETTINGS_ROUTE = '/settings'
export const USER_WITH_PARAMETER_ROUTE = '/user/:id'  
export const POST_WITH_PARAMETER_ROUTE = '/post/:link'  
export const NOT_FOUND_ROUTE = '/*'

type Route = {
    path: string,
    Component: React.FC
}

export const publicRoutes: Route[] = [
    {
        path: HOME_ROUTE,
        Component: React.lazy(() => import('./Home'))
    },
    {
        path: LOGIN_ROUTE,
        Component: React.lazy(() => import('./Login'))
    },
    {
        path: REGISTRATION_ROUTE,
        Component: React.lazy(() => import('./Registration'))
    },
    {
        path: NOT_FOUND_ROUTE,
        Component: React.lazy(() => import('./NotFound'))
    },
    {
        path: USER_WITH_PARAMETER_ROUTE,
        Component: React.lazy(() => import('./User'))
    },
    {
        path: POST_WITH_PARAMETER_ROUTE,
        Component: React.lazy(() => import('./Post'))
    }
]

export const authorizedRoutes: Route[] = [
    {
        path: ACCOUNT_ROUTE,
        Component: React.lazy(() => import('./Account'))
    },
    {
        path: SETTINGS_ROUTE,
        Component: React.lazy(() => import('./Settings'))
    },
    {
        path: CHATS_ROUTE,
        Component: React.lazy(() => import('./Chats'))
    }
]
