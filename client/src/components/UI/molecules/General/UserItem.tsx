import React from 'react'
import { UserPreview } from '../../../../types/user'
import { Img, P } from '../../atoms'

const UserItem: React.FC<Props> = ({ photo, name, surname }) => {
    return (
        <>
            <Img topic="user-item-preview" src={photo || undefined} />
            <P>{name} {surname}</P>
        </>
    )
}

type Props = UserPreview

export default UserItem