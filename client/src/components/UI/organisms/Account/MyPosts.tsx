import React from 'react'

import { useAppSelector } from '../../../../hooks'
import { useCheck } from '../../../../hooks'
import { postsSelector } from '../../../../store/selector'
import { Ul, Li } from '../../atoms'
import Post from '../../molecules/Post'

const MyPosts: React.FC = () => {
    const accountPage = useAppSelector(postsSelector).accountPage
    const check = useCheck(accountPage)

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

export default MyPosts