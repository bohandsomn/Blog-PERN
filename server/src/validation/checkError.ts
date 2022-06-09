import { Request } from 'express'
import { validationResult } from 'express-validator'
import HttpException from '../Exception/Http'

const checkError = (request: Request) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
        throw HttpException.BadRequest('Validation error', errors.array().map<string>(({ msg }) => msg))
    }
}

export default checkError
