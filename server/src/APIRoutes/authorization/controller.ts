import config from 'config'

import authorizationService from './service'
import checkError from '../../validation/checkError'
import Response from '../../services/Response'

import type { ControllerType } from './type'

class Controller {
    registration: ControllerType.Registration = async (request, response, next) => {
        try {
            checkError(request)

            const { name, email, login, password, privacy } = request.body
            const { refreshToken, ...userData } = await authorizationService.registration({ name, email, login, password, privacy })

            response.cookie(
                'refresh',
                refreshToken,
                { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }
            )

            response.json(new Response('Successful registration', userData))
        } catch (error) {
            next(error)
        }
    }

    login: ControllerType.Login = async (request, response, next) => {
        try {
            checkError(request)
            
            const { email, password } = request.body
            const { refreshToken, ...userData } = await authorizationService.login({ email, password })

            response.cookie(
                'refresh', 
                refreshToken, 
                { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }
            )
            response.json(new Response('Successful login', userData))
        } catch (error) {
            next(error)
        }
    }

    update: ControllerType.Update = async (request, response, next) => {
        try {
            checkError(request)

            const { name, surname, email, login, password, birthday, privacy, user } = request.body

            const { refreshToken, ...userData } = await authorizationService.update({ name, surname, email, login, password, birthday, privacy, user })

            response.cookie(
                'refresh', 
                refreshToken, 
                { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }
            )
            response.json(new Response('Successful update', userData))
        } catch (error) {
            next(error)
        }
    }

    autoLogin: ControllerType.AutoLogin = async (request, response, next) => {
        try {
            const { user } = request.body
            const { refreshToken, ...userData } = await authorizationService.autoLogin(user.id)

            response.cookie(
                'refresh', 
                refreshToken, 
                { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }
            )
            response.json(new Response('Successful auto-login', userData))
        } catch (error) {
            next(error)
        }
    }

    logout: ControllerType.Logout = async (request, response, next) => {
        try {
            const { refresh } = request.cookies
            await authorizationService.logout(refresh)

            response.clearCookie('refresh')
            response.json(new Response('Successful logout', null))
        } catch (error) {
            next(error)
        }
    }

    activation: ControllerType.Activation = async (request, response, next) => {
        try {
            const { link } = request.params
            await authorizationService.activation(link)

            const CLIENT_URL = config.get<string>('CLIENT_URL')
            response.redirect(CLIENT_URL)
        } catch (error) {
            next(error)
        }
    }

    refresh: ControllerType.Refresh = async (request, response, next) => {
        try {
            const { refresh } = request.cookies
            const { refreshToken, ...userData } = await authorizationService.refresh(refresh)

            response.cookie(
                'refresh', 
                refreshToken, 
                { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }
            )
            response.json(new Response('Successful refresh', userData))
        } catch (error) {
            next(error)
        }
    }
}

export default new Controller()