import type { NextFunction, Request, Response } from 'express'

type CreateMethod<Req = Request, Res = Response, Next = NextFunction> = (request: Req, response: Res, next: Next) => Promise<void>

export default CreateMethod
