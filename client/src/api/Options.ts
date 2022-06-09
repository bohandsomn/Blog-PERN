import Token from "../services/Token"

type Method = 'GET' | 'HEAD' | 'PUT' | 'PATCH' | 'POST' | 'DELETE'
type Headers = Partial<{ 
    readonly 'Content-Type': string
    'authorization': string 
}>
type Body = Required<BodyInit>

export default class Options implements RequestInit {
    public readonly method: Method
    public readonly body?: Body
    public readonly headers: Headers = {
        'authorization': `Bearer ${Token.get()}`
    }
    public readonly credentials = 'include'

    protected static GET = () => {
        return new this('GET')
    }

    protected static POST = (body: any, headers?: Headers) => {
        return new this('POST', body, headers)
    }

    protected static PUT = (body: any, headers?: Headers) => {
        return new this('PUT', body, headers)
    }

    protected static PATCH = (body?: any, headers?: Headers) => {
        return new this('PATCH', body, headers)
    }

    protected static DELETE = () => {
        return new this('DELETE')
    }
    
    constructor(method: Method, body?: any, headers?: Headers) {
        this.method = method
        if (body !== undefined) {
            this.body = body
        }
        this.headers = { ...this.headers, ...headers }
    }
}
