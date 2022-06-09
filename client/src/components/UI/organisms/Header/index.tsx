import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { toggle } from '../../../../store/slices/theme'
import { HOME_ROUTE } from '../../../pages'
import { Section, Div, Header } from '../../atoms'
import HeaderSettings from '../../molecules/header/Settings'
import UserProfile from '../../molecules/header/UserProfile'
import { Logo } from '../../molecules/Icons'
import Post from '../../../../api/post/dispatching'
import { userSelector, searchPostsSelector } from '../../../../store/selector'
import Toggle from '../../molecules/header/Toggle'

const PageHeader: React.FC = () => {
    const dispatch = useAppDispatch()

    const user = useAppSelector(userSelector)
    const query = useAppSelector(searchPostsSelector).query

    const getManyMainPage = Post.dispatch.getManyMainPage

    const toggleTheme = useCallback(() => {
        dispatch(toggle())
    }, [])

    const handleClick = useCallback(() => getManyMainPage(query), [query])

    return (
        <Header topic="main">
            <Section topic="container">
                <Div topic="main-header">
                    <Link to={HOME_ROUTE}>
                        <Logo onClick={handleClick} />
                    </Link>
                    <Div topic="toggle-wrapper">
                        <Toggle 
                            id="toggle-theme" 
                            onMouseUp={toggleTheme}
                        />
                        {
                            user.data === null
                                ? <HeaderSettings />
                                : <UserProfile />
                        }
                    </Div>
                </Div>
            </Section>
        </Header>
    )
}

export default React.memo(PageHeader)