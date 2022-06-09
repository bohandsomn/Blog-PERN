import type ChatDTO from '../../DTOs/chat'
import type PhotoDTO from '../../DTOs/photo'
import type IChat from '../../types/entities/chat'
import type IMessage from '../../types/entities/message'
import type IUser from '../../types/entities/user'
import type { TypedRequest, TypedResponse } from '../../types/RequestResponse'
import type CreateMethod from '../../types/Utility/CreateMethod'
import type Request from './request'
import type Response from './response'

type ServiceCreate = {
    userId: IUser['id']
    name: IChat['name']
    privacy: IChat['privacy']
}

type ServiceUpdate = {
    id: IChat['id']
    name: IChat['name']
    privacy: IChat['privacy']
}

type ServiceUpdateLastMessage = {
    id: IChat['id']
    messageId: IMessage['id']
}

export namespace ServiceType {
    export type Create = (serviceCreate: ServiceCreate) => Promise<ChatDTO>
    export type GetOne = (rule: Partial<IChat>) => Promise<ChatDTO>
    export type GetPhoto = (id: IChat['id'] | string) => Promise<Buffer | null>
    export type GetMany = (userId: IUser['id'] | string) => Promise<ChatDTO[]>
    export type GetManyByName = (name: IChat['name']) => Promise<ChatDTO[]>
    export type Update = (updateCreate: ServiceUpdate) => Promise<ChatDTO>
    export type UpdateLastMessage = (serviceUpdateLastMessage: ServiceUpdateLastMessage) => Promise<ChatDTO>
    export type SetPhoto = (chatId: string, photoDTO: PhotoDTO) => Promise<ChatDTO>
    export type Delete = (link: IChat['link']) => Promise<null>
}

export namespace ControllerType {
    export type Create = CreateMethod<
        TypedRequest.Body<Request.Create>, 
        TypedResponse.Json<Response.Create>
    >
    export type GetOne = CreateMethod<
        TypedRequest.Params<Request.GetOne>, 
        TypedResponse.Json<Response.GetOne>
    >
    export type GetPhoto = CreateMethod<
        TypedRequest.Params<Request.GetPhoto>, 
        TypedResponse.Json<Response.GetPhoto>
    >
    export type GetMany = CreateMethod<
        TypedRequest.Params<Request.GetMany>, 
        TypedResponse.Json<Response.GetMany>
    >
    export type GetManyByName = CreateMethod<
        TypedRequest.Params<Request.GetManyByName>, 
        TypedResponse.Json<Response.GetManyByName>
    >
    export type Update = CreateMethod<
        TypedRequest.Body<Request.Update>, 
        TypedResponse.Json<Response.Update>
    >
    export type UpdateLastMessage = CreateMethod<
        TypedRequest.Body<Request.UpdateLastMessage>, 
        TypedResponse.Json<Response.UpdateLastMessage>
    >
    export type SetPhoto = CreateMethod<
        TypedRequest.Params<Request.SetPhoto>,
        TypedResponse.Json<Response.SetPhoto>
    >
    export type Delete = CreateMethod<
        TypedRequest.Params<Request.Delete>, 
        TypedResponse.Json<Response.Delete>
    >
}
