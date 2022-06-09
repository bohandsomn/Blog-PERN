import React, { useCallback, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import Photo from '../../../../api/photo/dispatching'

import { useAppSelector } from '../../../../hooks'

import { HOME_ROUTE, REGISTRATION_ROUTE } from '../../../pages'

import { P, Form } from '../../atoms'
import ButtonLinear from '../General/Button/Linear'
import InputMain from '../General/Input/Main'
import Authorization from '../../../../api/authorization/dispatching'
import { userSelector } from '../../../../store/selector'

const Login: React.FC = () => {
    const user = useAppSelector(userSelector)
    const getOne = Photo.dispatch.getOne
    const login = Authorization.dispatch.login

    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const handleSetField = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setState((previousState) => ({
            ...previousState, 
            [event.target.name]: event.target.value
        }))
    }, [])

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()

        await login(state) && await getOne()
    }

    if (user.data !== null) {
        return (
            <Navigate to={HOME_ROUTE} />
        )
    }
    
    return (
        <Form topic="admin" onSubmit={handleSubmit}>
            <InputMain 
                type="email"
                name="email" 
                placeholder="Enter email"
                autoComplete="off"
                value={state.email} 
                onChange={handleSetField} 
            />
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
            <P topic="wrap-anywhere">Don't have an account? <Link to={REGISTRATION_ROUTE}>Register</Link></P>
        </Form>
    )
}

export default Login