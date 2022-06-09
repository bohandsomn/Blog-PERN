import React from 'react'
import Login from '../../molecules/Form/Login'
import { Div } from '../../atoms'
import Greeting from '../../molecules/Form/Greeting'

const LoginForm: React.FC = () => {
    return (
        <Div topic="login-form">
            <Greeting />
            <Login />
        </Div>
    )
}

export default LoginForm