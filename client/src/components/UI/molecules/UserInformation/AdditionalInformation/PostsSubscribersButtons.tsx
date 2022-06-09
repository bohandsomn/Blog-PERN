import React from 'react'

import { useAppDispatch, useAppSelector, useCheck } from '../../../../../hooks'
import { followersSelector, postsSelector } from '../../../../../store/selector'
import { setCurrent } from '../../../../../store/slices/followers'
import { Div } from '../../../atoms'
import ButtonPlain from '../../General/Button/Plain'

const PostsSubscribersButtons: React.FC = () => {
    const dispatch = useAppDispatch()

    const posts = useAppSelector(postsSelector)
    const subscribers = useAppSelector(followersSelector).subscribers
    const subscriptions = useAppSelector(followersSelector).subscriptions

    const checkSubscribers = useCheck(subscribers)
    const checkSubscriptions = useCheck(subscriptions)

    if (!checkSubscribers.boolean) {
        return <checkSubscribers.element />
    }

    if (!checkSubscriptions.boolean) {
        return <checkSubscriptions.element />
    }

    if (posts.accountPage.data === null) {
        return (
            <></>
        )
    }

    return (
        <Div topic="posts-subscribers-buttons">
            <ButtonPlain>
                {posts.accountPage.data.length} posts
            </ButtonPlain>
            <ButtonPlain onClick={() => dispatch(setCurrent('SUBSCRIBERS'))}>
                {checkSubscribers.data.length} subscribers
            </ButtonPlain>
            <ButtonPlain onClick={() => dispatch(setCurrent('SUBSCRIPTIONS'))}>
                {checkSubscriptions.data.length} subscriptions
            </ButtonPlain>
        </Div>
    )
}

export default PostsSubscribersButtons