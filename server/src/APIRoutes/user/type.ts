import type PrivateUserDTO from '../../DTOs/privateUser'
import type PublicUserDTO from '../../DTOs/publicUser'
import type User from '../../types/entities/user'
import type { UserPreview } from '../../types/entities/user'
import type { TypedRequest, TypedResponse } from '../../types/RequestResponse'
import type Request from './request'
import type Response from './response'
import type CreateMethod from '../../types/Utility/CreateMethod'

export namespace ControllerType {
    export type GetSubscribers = CreateMethod<
        TypedRequest.Body<Request.GetSubscribers>, 
        TypedResponse.Json<Response.GetSubscribers>
    >
    export type GetSubscriptions = CreateMethod<
        TypedRequest.Body<Request.GetSubscriptions>, 
        TypedResponse.Json<Response.GetSubscriptions>
    >
    export type GetPreview = CreateMethod<
        TypedRequest.Query<Request.GetPreviewQuery>, 
        TypedResponse.Json<Response.GetPreview>
    >
    export type GetOne = CreateMethod<
        TypedRequest.Params<Request.GetOneParams> & TypedRequest.Body<Request.GetOneBody>, 
        TypedResponse.Json<Response.GetOne>
    >
    export type Subscribe = CreateMethod<
        TypedRequest.Params<Request.SubscribeParams> & TypedRequest.Body<Request.SubscribeBody>, 
        TypedResponse.Json<Response.Subscribe>
    >
    export type Unsubscribe = CreateMethod<
        TypedRequest.Params<Request.UnsubscribeParams> & TypedRequest.Body<Request.UnsubscribeBody>, 
        TypedResponse.Json<Response.Unsubscribe>
    >
}

export namespace ServiceType {
    export type GetSubscribers = (userId: User['id']) => Promise<UserPreview[]>
    export type GetSubscriptions = (userId: User['id']) => Promise<UserPreview[]>
    export type GetPreviewByFullname = (fullname: User['name'] & User['surname']) => Promise<UserPreview[]>
    export type GetPreview = (userId: User['id']) => Promise<UserPreview | null>
    export type GetOne = (userId: User['id'], subscriberId: string) => Promise<PublicUserDTO | PrivateUserDTO>    
    export type Subscribe = (userId: User['id'], subscriberId: string) => Promise<null>
    export type Unsubscribe = (userId: User['id'], subscriberId: string) => Promise<null>
}
