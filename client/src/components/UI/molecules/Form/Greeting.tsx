import React from 'react'
import { Div, H1 } from '../../atoms'
import { SignOut } from '../Icons'

const Greeting: React.FC = () => {
    return (
        <Div topic="registration-form-greeting">
            <SignOut />
            <H1 topic="heading24">Hello!</H1>
        </Div>
    )
}

export default Greeting