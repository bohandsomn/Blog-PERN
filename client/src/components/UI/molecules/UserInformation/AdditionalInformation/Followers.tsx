import React from 'react'

import { Ul, Li } from '../../../atoms'
import FollowerItem from './Follower'
import type { UserPreview } from '../../../../../types/user'

const Followers: React.FC<Props> = ({ followers }) => {
    return (
        <Ul topic="additional-information-users">
            {
                followers.map((follower) => (
                    <Li key={follower.id}>
                        <FollowerItem follower={follower} />
                    </Li>
                ))
            }
        </Ul>
    )
}

type Props = {
    followers: UserPreview[]
}

export default Followers