import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import { useAppSelector } from './hooks'
import User from './api/user/dispatching'
import Post from './api/post/dispatching'
import Photo from './api/photo/dispatching'
import { Div } from './components/UI/atoms'
import PageHeader from './components/UI/organisms/Header'
import Authorization from './api/authorization/dispatching'
import Styles from './api/styles/dispatching'
import Chat from './api/chat/dispatching'
import Loading from './components/UI/molecules/General/Loading'
import { searchPostsSelector, postsSelector, themeSelector, userSelector } from './store/selector'
import { authorizedRoutes, publicRoutes, REGISTRATION_ROUTE } from './components/pages'

const App: React.FC = () => {
    const data = useAppSelector(userSelector).data
    const accountPage = useAppSelector(postsSelector).accountPage
    const query = useAppSelector(searchPostsSelector).query
    const theme = useAppSelector(themeSelector)

    const {getOne} = Photo.dispatch
    const {getManyMainPage, getManyAccountPage} = Post.dispatch
    const {getSubscribers, getSubscriptions} = User.dispatch
    const {autoLogin} = Authorization.dispatch
    const {get} = Styles.dispatch
    const {getMany} = Chat.dispatch

    useEffect(() => {
        const initialRequests = async () => {
            get()
            getManyMainPage({...query, page: '0'})
    
            const isAutoLoged = await autoLogin()
            isAutoLoged && getOne()
            isAutoLoged && getSubscribers()
            isAutoLoged && getSubscriptions()
        }

        initialRequests()
    }, [])

    useEffect(() => {
        if (data === null || accountPage.data !== null) {
            return
        }

        getManyAccountPage({ ...query, userIds: [data.id.toString()] as never as string})
        getMany(data.id.toString())
    }, [data, accountPage])
    
    return (
        <Div topic="app" id="app" className={theme}>
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <PageHeader />
                    <Routes>
                        {publicRoutes.map(({ path, Component }) =>
                            <Route key={path} path={path} element={<Component />} />
                        )}
                        {authorizedRoutes.map(({ path, Component }) => 
                            data !== null 
                                ? <Route key={path} path={path} element={<Component />} />
                                : <Route key={path} path={path} element={<Navigate to={REGISTRATION_ROUTE} />} />
                        )}
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </Div>
    )
}

export default App