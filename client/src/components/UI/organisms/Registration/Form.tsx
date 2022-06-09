import React from 'react'
import Registration from '../../molecules/Form/Registration'
import { Div } from '../../atoms'
import Greeting from '../../molecules/Form/Greeting'

const RegistrationForm: React.FC = () => {
    return (
        <Div topic="registration-form">
            <Greeting />
            <Registration />
        </Div>
    )
}

export default RegistrationForm