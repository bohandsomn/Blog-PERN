import type { ErrorRequestHandler } from 'express'

import HttpException from '../Exception/Http'
import Response from '../services/Response'

const errorHandlerMiddleware: ErrorRequestHandler = (error, request, response, next) => {
    console.log(error)

    if (error instanceof HttpException) {
        const { status, message, errors } = error
        response
            .status(status)
            .json(new Response([message, ...errors].join('; '), null))
        return 
    }
    
    response
        .status(500)
        .json(new Response('Unexpected error', null))
}

export default errorHandlerMiddleware
