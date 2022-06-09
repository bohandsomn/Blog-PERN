import React from 'react'
import { Link } from 'react-router-dom'

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../../../pages'
import { Ul, Li } from '../../../atoms'
import { SignOut } from '../../Icons'

const PullDownMenu: React.FC<Props> = ({ setIsToggle }) => {
    return (
        <Ul topic="header-pull-down-menu" onClick={() => setIsToggle((previousIsToggle) => !previousIsToggle)}>
            <Li>
                <Link to={LOGIN_ROUTE}>Log in</Link><SignOut width={16} height={16} />
            </Li>
            <Li>
                <Link to={REGISTRATION_ROUTE}>Register</Link><SignOut width={16} height={16} />
            </Li>
        </Ul>
    )
}

type Props = {
    setIsToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export default PullDownMenu