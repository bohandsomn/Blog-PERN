import React from 'react'

import { Div } from '../../atoms'
import AdditionalInformation from '../../molecules/UserInformation/AdditionalInformation'
import PersonalInformation from '../../molecules/UserInformation/PersonalInformation'
import PhotoConstructor from '../../molecules/UserInformation/PersonalInformation/PhotoConstructor'

const UserInformation: React.FC = () => {
    return (
        <Div topic="user-information">
            <Div topic="account-photo-constructor">
                <PhotoConstructor />
            </Div>
            <Div topic="user-information-container">
                <PersonalInformation />
                <AdditionalInformation />
            </Div>
        </Div>
    )
}

export default UserInformation