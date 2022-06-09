type Errors = string[]

export default class HttpException extends Error {
    public readonly status: number
    public readonly message: string = this.message
    public readonly errors: Errors

    constructor(status: number, message: string, errors: Errors = []) {
        super(message)

        this.status = status
        this.errors = errors
    }  

    public static BadRequest = (message: string, errors: Errors = []): HttpException => {
        return new this(400, message, errors)
    } 

    public static Unauthorized = (): HttpException => {
        return new this(401, 'User not authorized')
    }

    public static Forbidden = (message: string): HttpException => {
        return new this(403, message)
    }

    public static NotFound = (message: string): HttpException => {
        return new this(404, message)
    }

    public static Conflict = (message: string): HttpException => {
        return new this(409, message)
    }

    public static UnprocessableEntity = (message: string): HttpException => {
        return new this(422, message)
    }

    public static InternalServerError = (): HttpException => {
        return new this(500, 'The server encountered an unexpected condition')
    }
}