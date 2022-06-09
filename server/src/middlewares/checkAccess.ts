import type { NextFunction } from 'express'

import tokenService from '../APIRoutes/authorization/service/token'
import HttpException from '../Exception/Http'

import type { TypedRequest, TypedResponse } from '../types/RequestResponse'
import type UserDTO from '../DTOs/user'

export interface AfterCheckAccessBody {
    user: UserDTO
}

type CheckAccessRequest = {
    authorization?: string
}

type CheckAccessMiddleware = (request: TypedRequest.Headers<CheckAccessRequest>, response: TypedResponse.Json<any>, next: NextFunction) => void


const checkAccessMiddleware: CheckAccessMiddleware = (request, response, next) => {
    try {
        const authorizationHeader = request.headers.authorization
        if (authorizationHeader === undefined) {
            return next(HttpException.Unauthorized())
        }

        const [ , accessToken] = authorizationHeader.split(' ') as [string, string | undefined]
        if (accessToken === undefined) {
            return next(HttpException.Unauthorized())
        }

        const userData = tokenService.verify(accessToken, 'ACCESS')

        request.body.user = userData
        next()
    } catch (error) {
        return next(HttpException.Unauthorized())
    }
}

export default checkAccessMiddleware
