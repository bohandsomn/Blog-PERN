import React from 'react'

import { H1 } from '../../../../atoms'
import type { UserDTO } from '../../../../../../types/user'

const H1s: React.FC<Props> = ({ name, surname }) => {
    return (
        <>
            <H1 topic="heading24">{name}&nbsp;</H1>
            <H1 topic="heading24">{surname}</H1>
        </>
    )
}

type Props = {
    name: UserDTO['name']
    surname: UserDTO['surname']
}

export default H1s