import React, { useCallback, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import Authorization from '../../../../api/authorization/dispatching'
import { useAppSelector } from '../../../../hooks'
import { userSelector } from '../../../../store/selector'
import { privacyOptions } from '../../../../store/slices/user'
import { HOME_ROUTE, LOGIN_ROUTE } from '../../../pages'
import { P, Div, Form } from '../../atoms'
import ButtonLinear from '../General/Button/Linear'
import InputMain from '../General/Input/Main'
import InputRadio from '../General/Input/Radio'

const Registration: React.FC = () => {
    const user = useAppSelector(userSelector)
    const registration = Authorization.dispatch.registration

    const [state, setState] = useState({
        name: '',
        email: '',
        login: '',
        password: '',
        privacy: 'PUBLIC' as const,
    })

    const handleSetField = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setState((previousState) => ({
            ...previousState, 
            [event.target.name]: event.target.value
        }))
    }, [])

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        
        await registration(state)
    }

    if (user.data !== null) {
        return (
            <Navigate to={HOME_ROUTE} />
        )
    }
    
    return (
        <Form topic="admin" onSubmit={handleSubmit}>
            <InputMain 
                type="text"
                name="name" 
                placeholder="Enter name"
                autoComplete="off"
                value={state.name} 
                onChange={handleSetField} 
            />
            <InputMain 
                type="text"
                name="login" 
                placeholder="Enter login"
                autoComplete="off"
                value={state.login} 
                onChange={handleSetField} 
            />
            <InputMain 
                type="email"
                name="email" 
                placeholder="Enter email"
                autoComplete="off"
                value={state.email} 
                onChange={handleSetField} 
            />
            <Div topic="registration-form-privacy">
                <InputRadio 
                    header="privacy" 
                    strings={privacyOptions} 
                    name="privacy" 
                    value={state.privacy} 
                    onChange={handleSetField} 
                />
            </Div>
            <InputMain 
                type="password"
                name="password" 
                placeholder="Enter password"
                autoComplete="off"
                value={state.password} 
                onChange={handleSetField} 
            />
            <ButtonLinear type="submit">
                Submit
            </ButtonLinear>
            <P topic="wrap-anywhere">Do you already have an account? <Link to={LOGIN_ROUTE}>Log in</Link></P>
        </Form>
    )
}

export default React.memo(Registration)