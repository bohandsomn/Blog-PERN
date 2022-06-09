import React from 'react'

import { Div, Section } from '../UI/atoms'
import RegistrationForm from '../UI/organisms/Registration/Form'

const Registration: React.FC = () => {
    return (
        <Section topic="container">
            <Div topic="registration-form-wrapper">
                <RegistrationForm />
            </Div>
        </Section>
    )
}

export default React.memo(Registration)