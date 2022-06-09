import React from 'react'

import { Ul, Li, P } from '../../../atoms'
import Comment from './Comment'

import type { PostDTO } from '../../../../../types/post'

const Comments: React.FC<Props> = ({ comments }) => {
    return (
        <Ul topic="post-comments">
            {comments.map((comment) => (
                <Li key={comment.id}>
                    <Comment {...comment} />
                </Li>
            ))}
            <Li>
                <P topic="comment-content-inscription">Show more...</P>
            </Li>
        </Ul>
    )
}

type Props = {
    comments: PostDTO['comments']
}

export default Comments