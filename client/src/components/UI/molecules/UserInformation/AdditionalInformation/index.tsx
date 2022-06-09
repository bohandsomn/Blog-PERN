import React, { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '../../../../../hooks'
import { setCurrent } from '../../../../../store/slices/followers'
import { Div } from '../../../atoms'
import { Cancel } from '../../Icons'
import PostsSubscribersButtons from './PostsSubscribersButtons'
import Followers from './Followers'
import { followersSelector } from '../../../../../store/selector'

const AdditionalInformation: React.FC = () => {
    const dispatch = useAppDispatch()
    const current = useAppSelector(followersSelector).current

    const handleClick = useCallback(() => {
        dispatch(setCurrent(null))
    }, [])

    return (
        <Div topic="additional-information">
            <PostsSubscribersButtons />
            {
                current !== null && (
                    <Div topic="additional-information-container">
                        <Followers followers={current} />
                        <Cancel onClick={handleClick} />
                    </Div>
                )
            }
        </Div>
    )
}

export default AdditionalInformation