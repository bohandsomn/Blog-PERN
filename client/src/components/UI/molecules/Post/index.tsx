import React, { useState } from 'react'

import { Div } from '../../atoms'
import Content from './Content'
import Follow from './Follow'
import PageHeader from './Header'
import Updater from './Updater'
import CommentSection from './CommentSection'

import { PostDTO } from '../../../../types/post'

const MyPost: React.FC<Props> = ({ id, title, content, time, link, visibility, comments }) => {
    const [isUpdated, setIsUpdated] = useState(false)

    return (
        <>
            {
                isUpdated
                    ? (
                        <Updater 
                            title={title} 
                            content={content} 
                            link={link} 
                            visibility={visibility} 
                            setIsUpdated={setIsUpdated} 
                        />
                    )
                    : (
                        <Div topic="post-container">
                            <PageHeader time={time} title={title} link={link} setIsUpdated={setIsUpdated} />
                            <Content content={content} />
                            <Follow id={id} />
                            <CommentSection link={link} comments={comments} />
                        </Div>
                    )
            }
        </>
    )
}

type Props = Pick<PostDTO, 'id' | 'title' | 'content' | 'time' | 'link' | 'visibility' | 'comments'>

export default React.memo(MyPost)