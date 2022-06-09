import React from 'react'

import { Div } from '../../../../atoms'
import { Dislike, Like } from '../../../Icons'
import LabelWithIcon from '../../../General/LabelWithIcon'
import Comment from '../../../../../../api/comment/dispatching'

import type { FollowCommentDTO } from '../../../../../../types/followComment'
import type { CommentDTO } from '../../../../../../types/comment'

const Follow: React.FC<Props> = ({ likes, dislikes, isFollow, id }) => {
    const {like, dislike} = Comment.dispatch

    const handleLike = () => {
        like(id.toString())
    }

    const handleDislike = () => {
        dislike(id.toString())
    }

    return (
        <Div topic="posts-post-follow">
            <LabelWithIcon after={<Like />} onClick={handleLike}>
                {
                    isFollow === null
                        ? likes
                        : isFollow
                            ? <b>{likes}</b>
                            : likes
                }
            </LabelWithIcon>
            <LabelWithIcon after={<Dislike />} onClick={handleDislike}>
                {
                    isFollow === null
                        ? dislikes
                        : isFollow
                            ? dislikes
                            : <b>{dislikes}</b>
                }
            </LabelWithIcon>
        </Div>
    )
}

type Props = FollowCommentDTO & {
    id: CommentDTO['id']
}

export default Follow