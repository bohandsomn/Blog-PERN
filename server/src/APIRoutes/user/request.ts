import User from '../../types/entities/user'
import { AfterCheckAccessBody } from '../../middlewares/checkAccess'

namespace Request {
    export type GetSubscribers = AfterCheckAccessBody
    export type GetSubscriptions = AfterCheckAccessBody
    export type GetPreviewQuery = {
        fullname: User['name'] & User['surname']
    }
    export type GetOneBody = AfterCheckAccessBody
    export type GetOneParams = {
        subscriberId: string
    }
    export type SubscribeBody = AfterCheckAccessBody
    export type SubscribeParams = {
        subscriberId: string
    }
    export type UnsubscribeBody = AfterCheckAccessBody
    export type UnsubscribeParams = {
        subscriberId: string
    }
}

export default Request
