import type { NextFunction } from 'express'

import HttpException from '../Exception/Http'

import type { TypedRequest, TypedResponse } from '../types/RequestResponse'
import type { AfterCheckAccessBody } from './checkAccess'

type CheckIsActivation = (request: TypedRequest.Body<AfterCheckAccessBody>, response: TypedResponse.Json<any>, next: NextFunction) => void

const checkIsActivation: CheckIsActivation = (request, response, next) => {
    try {
        const { user } = request.body

        if (!user.isActivation) {
            return next(HttpException.BadRequest('User not activated'))
        }

        next()
    } catch (error) {
        return next(HttpException.BadRequest('User not activated'))
    }
}

export default checkIsActivation
