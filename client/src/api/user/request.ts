import type User from '../../../../server/src/APIRoutes/user/request'

namespace Request {
    export type GetPreview = User.GetPreviewQuery
    export type GetOne = User.GetOneParams['subscriberId']
    export type SubscribeParams = User.SubscribeParams['subscriberId']
    export type UnsubscribeParams = User.UnsubscribeParams['subscriberId']
}

export default Request
