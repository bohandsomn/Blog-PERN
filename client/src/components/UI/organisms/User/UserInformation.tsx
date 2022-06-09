import React from 'react'
import { Navigate } from 'react-router-dom'

import Converter from '../../../../services/Converter'
import { useAppSelector, useCheck } from '../../../../hooks'
import { PublicUserDTO } from '../../../../types/user'
import { Ul, Div, Img, Li, P } from '../../atoms'
import H3Item from '../../molecules/UserInformation/PersonalInformation/ElseInformation/Item/H3'
import H1s from '../../molecules/UserInformation/PersonalInformation/Fullname/H1s'
import ButtonLinear from '../../molecules/General/Button/Linear'
import User from '../../../../api/user/dispatching'
import { currentSelector } from '../../../../store/selector'
import { HOME_ROUTE } from '../../../pages'

const UserInformation: React.FC = () => {
    const photo = useAppSelector(currentSelector).photo
    const user = useAppSelector(currentSelector).user

    const {subscribe, unsubscribe} = User.dispatch

    const checkPhoto = useCheck(photo)
    const checkUser = useCheck(user)
    if (!checkPhoto.boolean) {
        return <checkPhoto.element />
    }

    if (user.isError) {
        return <Navigate to={HOME_ROUTE} />
    }

    if (!checkUser.boolean) {
        return <checkUser.element />
    }


    const handleSubscribe = () => {
        subscribe(checkUser.data.id.toString())
    }

    const handleUnsubscribe = () => {
        unsubscribe(checkUser.data.id.toString())
    }

    return (
        <Div topic="user-information">
            <Div topic="account-photo-constructor">
                <Img 
                    topic="account-original" 
                    src={checkPhoto.data?.original} 
                />
            </Div>
            <Div topic="user-information-container">
                <Div>
                    <H1s name={checkUser.data.name} surname={checkUser.data.surname} />
                    <Ul topic="else-information">
                        {
                            checkUser.data.privacy === 'PUBLIC' && (
                                <>
                                    <Li>
                                        <P topic="account-personal-information">email:&nbsp;</P>
                                        <H3Item>{(checkUser.data as PublicUserDTO).email}</H3Item>
                                    </Li>
                                    <Li>
                                        <P topic="account-personal-information">login:&nbsp;</P>
                                        <H3Item>{(checkUser.data as PublicUserDTO).login}</H3Item>
                                    </Li>
                                </>
                            )
                        }
                        <Li>
                            <P topic="account-personal-information">birthday:&nbsp;</P>
                            <H3Item>
                                {Converter.YYYYMMDD(checkUser.data.birthday === null ? Date.now() : checkUser.data.birthday)}
                            </H3Item>
                        </Li>
                        <Li>
                            <P topic="account-personal-information">privacy:&nbsp;</P>
                            <H3Item>{checkUser.data.privacy}</H3Item>
                        </Li>
                    </Ul>
                </Div>
                <Div>
                    {
                        checkUser.data.isSubscriber 
                            ? (
                                <ButtonLinear onClick={handleUnsubscribe}>
                                    Unsubscribe
                                </ButtonLinear>
                            )
                            : (
                                <ButtonLinear onClick={handleSubscribe}>
                                    Subscribe
                                </ButtonLinear>
                            )
                    }
                </Div>
            </Div>
        </Div>
    )
}

export default React.memo(UserInformation)