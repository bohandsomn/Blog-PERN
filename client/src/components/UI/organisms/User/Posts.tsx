import React from 'react'
import { Navigate } from 'react-router-dom'

import { useAppSelector, useCheck } from '../../../../hooks'
import { currentSelector } from '../../../../store/selector'
import { HOME_ROUTE } from '../../../pages'
import { Ul, Li } from '../../atoms'
import Post from '../../molecules/Post'

const Posts: React.FC = () => {
    const posts = useAppSelector(currentSelector).posts
    const check = useCheck(posts)

    if (posts.isError) {
        return (
            <Navigate to={HOME_ROUTE} />
        )
    }

    if (!check.boolean) {
        return <check.element />
    }

    return (
        <Ul topic="posts-container">
            {
                check.data.map((post) => (
                    <Li topic="account-my-post" key={post.link}>
                        <Post {...post} />
                    </Li>
                ))
            }
        </Ul>
    )
}

export default Posts