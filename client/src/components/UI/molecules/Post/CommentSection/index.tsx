import React from 'react'

import { Div } from '../../../atoms'
import Comments from './Comments'
import Create from './Create'

import type { PostDTO } from '../../../../../types/post'

const CommentSection: React.FC<Props> = ({ link, comments }) => {
    return (
        <Div topic="comment-section">
            <Create link={link} />
            <Comments comments={comments} />
        </Div>
    )
}

type Props = {
    link: PostDTO['link']
    comments: PostDTO['comments']
}

export default CommentSection