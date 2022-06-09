import React from 'react'
import Post from '../../../../../api/post/dispatching'

import { useAppSelector } from '../../../../../hooks'
import { postsSelector } from '../../../../../store/selector'
import { Div } from '../../../atoms'
import ButtonLinear from '../../General/Button/Linear'

const Create: React.FC = () => {
    const post = useAppSelector(postsSelector)
    const create = Post.dispatch.create

    const handleClick: React.MouseEventHandler = async (event) => {
        event.preventDefault()

        if (post.accountPage === null) {
            return 
        }

        await create(post.newPost)
    }

    return (
        <Div topic="post-creator-button">
            <ButtonLinear onClick={handleClick}>
                Create
            </ButtonLinear>
        </Div>
    )
}

export default React.memo(Create)