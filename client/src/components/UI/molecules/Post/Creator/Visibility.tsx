import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../hooks'
import { postsSelector } from '../../../../../store/selector'
import { changeNewPost, postOptions } from '../../../../../store/slices/posts'
import { Div } from '../../../atoms'
import InputRadio from '../../General/Input/Radio'

const Visibility: React.FC = () => {
    const newPost = useAppSelector(postsSelector).newPost
    const dispatch = useAppDispatch()

    return (
        <Div topic="post-creator-visibility">
            <InputRadio 
                header="Post visibility:"
                strings={postOptions}
                value={newPost.visibility}
                onChange={(event) => dispatch(changeNewPost({ visibility: event.target.value as typeof newPost.visibility }))}
            />
        </Div>
    )
}

export default React.memo(Visibility)