import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Current from '../../api/current/dispatching'
import { useAppSelector, useCheck } from '../../hooks'
import { currentSelector } from '../../store/selector'
import { Img, Li, Section, Ul } from '../UI/atoms'
import MyPost from '../UI/molecules/Post'

const Post: React.FC = () => {
    const userId = useParams().link
    const post = useAppSelector(currentSelector).post
    const check = useCheck(post)

    const getOnePost = Current.dispatch.getOnePost

    useEffect(() => {
        if (userId === undefined) {
            return
        }

        getOnePost(userId)
    }, [])

    if (!check.boolean) {
        return <check.element />
    }

    return (
        <Section topic="container">
            <Ul topic="posts-container">
                <Li topic="home-post">
                    <Img topic="post-post" src={check.data.photo} />
                    <MyPost {...check.data} />
                </Li>
            </Ul>
        </Section>
    )
}

export default React.memo(Post)