import React from 'react'

import { Section } from '../UI/atoms'
import MyPosts from '../UI/organisms/Account/MyPosts'
import PostCreator from '../UI/molecules/Post/Creator'
import UserInformation from '../UI/organisms/Account/UserInformation'

const Account: React.FC = () => {
    return (
        <Section topic="container">
            <UserInformation />
            <PostCreator />
            <MyPosts />
        </Section>
    )
}

export default React.memo(Account)