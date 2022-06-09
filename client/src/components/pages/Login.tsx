import React from 'react'
import { Section, Div } from '../UI/atoms'
import LoginForm from '../UI/organisms/Login/Form'

const Login: React.FC = () => {
    return (
        <Section topic="container">
            <Div topic="login-form-wrapper">
                <LoginForm />
            </Div>
        </Section>
    )
}

export default React.memo(Login)