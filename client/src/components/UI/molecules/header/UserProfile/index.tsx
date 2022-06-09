import React, { useState } from 'react'

import { useAppSelector, useCheck } from '../../../../../hooks'
import { userSelector, photoSelector } from '../../../../../store/selector'
import { Nav, Div, Img } from '../../../atoms'
import PullDownMenu from './PullDownMenu'

import ButtonPlain from '../../General/Button/Plain'

const UserProfile: React.FC = () => {
    const user = useAppSelector(userSelector)
    const photo = useAppSelector(photoSelector).data
    const [isToggle, setIsToggle] = useState(false)

    const check = useCheck(user)

    if (!check.boolean) {
        return <check.element />
    }

    return (
        <Div topic="user-profile">
            <Img topic="user-profile-preview" src={photo?.preview} />
            <Nav>
                <ButtonPlain onClick={() => setIsToggle((previousIsToggle) => !previousIsToggle)}>
                    {check.data.name}&nbsp;{check.data.surname}
                </ButtonPlain> 
                {
                    isToggle && <PullDownMenu setIsToggle={setIsToggle} />
                }
            </Nav>
        </Div>
    )
}

export default React.memo(UserProfile)