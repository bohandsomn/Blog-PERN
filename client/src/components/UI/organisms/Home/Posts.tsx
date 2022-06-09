import React from 'react'

import { useAppSelector } from '../../../../hooks'
import { useCheck } from '../../../../hooks'
import { postsSelector } from '../../../../store/selector'
import { Ul, Img, Li } from '../../atoms'
import Post from '../../molecules/Post'

const Posts: React.FC = () => {
    const mainPage = useAppSelector(postsSelector).mainPage
    const check = useCheck(mainPage)

    if (!check.boolean) {
        return <check.element />
    }

    return (
        <Ul topic="posts-container">
            {
                check.data.map(({ photo, ...post }) => 
                    <Li topic="home-post" key={post.link}>
                        <Img topic="post-post" src={photo} />
                        <Post {...post} />
                    </Li>
                )
            }
        </Ul>
    )
}

export default React.memo(Posts)