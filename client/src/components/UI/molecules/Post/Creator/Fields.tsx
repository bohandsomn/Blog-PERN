import React from 'react'

import { useAppDispatch, useAppSelector, useCheck } from '../../../../../hooks'
import { userSelector, postsSelector } from '../../../../../store/selector'
import { changeNewPost } from '../../../../../store/slices/posts'
import { P, Div } from '../../../atoms'
import InputMain from '../../General/Input/Main'
import TextareaAutosize from '../../General/TextareaAutosize'

const Fields: React.FC = () => {
    const dispatch = useAppDispatch()
    const newPost = useAppSelector(postsSelector).newPost

    const user = useAppSelector(userSelector)
    
    const check = useCheck(user)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(changeNewPost({ [event.target.name]: event.target.value }))
    }

    if (!check.boolean) {
        return <check.element />
    }

    return (
        <Div topic="post-creator-fields">
            <P topic="wrap-anywhere">{check.data.name}&nbsp;{check.data.surname}</P>
            <InputMain 
                placeholder="Title" 
                name="title"
                value={newPost.title}
                onChange={handleChange}
            />
            <TextareaAutosize 
                topic="main" 
                placeholder="Post" 
                name="content"
                value={newPost.content}
                onChange={handleChange}
            />
        </Div>
    )
}

export default React.memo(Fields)