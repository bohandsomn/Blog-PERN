import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import Current from '../../api/current/dispatching'
import { useAppSelector } from '../../hooks'
import { ACCOUNT_ROUTE } from '../pages'
import { userSelector } from '../../store/selector'
import { Section } from '../UI/atoms'
import Posts from '../UI/organisms/User/Posts'
import UserInformation from '../UI/organisms/User/UserInformation'

const UserPage: React.FC = () => {
    const user = useAppSelector(userSelector)
    const {getOneUser, getOnePhoto, getManyPost} = Current.dispatch
    const userId = useParams().id

    useEffect(() => {
        if (userId === undefined) {
            return
        }
        
        getOneUser(userId)
        getOnePhoto({userId})
        getManyPost({ 
            userIds: [userId] as never as string, 
            title: '', 
            content: '', 
            visibility: 'PUBLIC',
            page: '0' 
        })
    }, [])

    if (user.data !== null && user.data.id.toString() === userId) {
        return <Navigate to={ACCOUNT_ROUTE} />
    }

    return (
        <Section topic="container">
            <UserInformation />
            <Posts />
        </Section>
    )
}

export default React.memo(UserPage)