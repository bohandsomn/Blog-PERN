import type { Request, Response } from 'express'
import type { Send, Query as QueryT, ParamsDictionary } from 'express-serve-static-core'
import type { IncomingHttpHeaders } from 'http'

export namespace TypedRequest {
    export interface Body<B> extends Request {
        body: B
    }
    export interface Cookies<C> extends Request {
        cookies: C
    }
    export interface Params<P extends ParamsDictionary> extends Request {
        params: P
    }
    export interface Headers<H extends IncomingHttpHeaders> extends Request {
        headers: H
    }
    export interface Query<T extends QueryT> extends Request {
        query: T
    }
}

export namespace TypedResponse {
    export interface Json<R> extends Response {
        json: Send<R, this>
    }
    export interface Redirect<S extends string> extends Response {
        redirect: { 
            (url: S): void
            (status: number, url: S): void
            (url: S, status: number): void
        }
    }
}