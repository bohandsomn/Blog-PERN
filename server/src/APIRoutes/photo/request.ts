import type { AfterCheckAccessBody } from '../../middlewares/checkAccess'

namespace Request {
    export type GetOriginalParams = {
        userId: string
    }
    export type GetPostParams = {
        userId: string
    }
    export type GetPreviewParams = {
        userId: string
    }
    export type GetMessageParams = {
        userId: string
    }
    export type Set = AfterCheckAccessBody
    export type Update = AfterCheckAccessBody 
    export type GetOneBody = AfterCheckAccessBody
    export type GetOneQuery = {
        userId?: string
    }
    export type Delete = AfterCheckAccessBody
}

export default Request
