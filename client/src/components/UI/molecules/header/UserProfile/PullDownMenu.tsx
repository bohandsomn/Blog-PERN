import React from 'react'
import { Link } from 'react-router-dom'
import Authorization from '../../../../../api/authorization/dispatching'
import { ACCOUNT_ROUTE, CHATS_ROUTE, HOME_ROUTE, SETTINGS_ROUTE } from '../../../../pages'

import { Ul, Li } from '../../../atoms'
import { Account, Chat, Settings, SignOut } from '../../Icons'

const PullDownMenu: React.FC<Props> = ({ setIsToggle }) => {
    const logout = Authorization.dispatch.logout

    const handleLogout = () => {
        logout()
    }

    return (
        <Ul topic="header-pull-down-menu" onClick={() => setIsToggle((previousIsToggle) => !previousIsToggle)}>
            <Li>
                <Link to={ACCOUNT_ROUTE}>Account</Link><Account />
            </Li>
            <Li>
                <Link to={CHATS_ROUTE}>Chats</Link><Chat />
            </Li>
            <Li>
                <Link to={SETTINGS_ROUTE}>Settings</Link><Settings />
            </Li>
            <Li onClick={handleLogout}>
                <Link to={HOME_ROUTE}>Logout</Link><SignOut width={16} height={16} />
            </Li>
        </Ul>
    )
}

type Props = {
    setIsToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export default PullDownMenu