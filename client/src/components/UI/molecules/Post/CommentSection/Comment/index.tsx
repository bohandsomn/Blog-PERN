import React from 'react'

import { P, Div, Img } from '../../../../atoms'
import CommentHeader from './Header'
import Settings from './Settings'
import Follow from './Follow'

import type { CommentDTO } from '../../../../../../types/comment'

const Comment: React.FC<Props> = ({ id, commentatorId, photo, time, content, name, surname, follow, link }) => {
    return (
        <>
            <Div>
                <Img topic="comment-message" src={photo} />
                <Div topic="comment-container">
                    <CommentHeader time={time} name={name} surname={surname} id={id} />
                    <P topic="wrap-anywhere">{content}</P>
                    <Follow id={id} {...follow} />
                </Div>
            </Div>
            <Settings commentatorId={commentatorId} link={link} />
        </>
    )
}

type Props = CommentDTO

export default Comment