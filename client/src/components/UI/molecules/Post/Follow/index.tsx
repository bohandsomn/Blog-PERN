import React from 'react'

import { Div } from '../../../atoms'
import { Dislike, Like } from '../../Icons'
import LabelWithIcon from '../../General/LabelWithIcon'
import { PostDTO } from '../../../../../types/post'
import Post from '../../../../../api/post/dispatching'

const Follow: React.FC<Props> = ({ id }) => {
    const {like, dislike} = Post.dispatch

    const handleLike = () => {
        like(id.toString())
    }
    const handleDislike = () => {
        dislike(id.toString())
    }

    return (
        <Div topic="posts-post-follow">
            <LabelWithIcon after={<Like />} onClick={handleLike}>
                LIKE
            </LabelWithIcon>
            <LabelWithIcon after={<Dislike />} onClick={handleDislike}>
                DISLIKE
            </LabelWithIcon>
        </Div>
    )
}

type Props = Pick<PostDTO, 'id'>

export default Follow