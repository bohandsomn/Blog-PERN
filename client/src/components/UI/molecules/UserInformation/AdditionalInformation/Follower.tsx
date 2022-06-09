import React from 'react'
import { Link } from 'react-router-dom'

import { H3, Img } from '../../../atoms'
import type { UserPreview } from '../../../../../types/user'

const FollowerItem: React.FC<Props> = ({ follower }) => {
    return (
        <Link to={'/user/' + follower.id}>
            <Img topic="additional-information-preview" src={follower.photo || undefined} />
            <H3>{follower.name + ' ' + (follower.surname || '')}</H3>
        </Link>
    )
}

type Props = {
    follower: UserPreview
}

export default FollowerItem