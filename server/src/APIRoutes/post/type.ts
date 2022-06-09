import type PostDTO from '../../DTOs/post'
import type UserDTO from '../../DTOs/user'
import type { PostFromDB } from '../../types/entities/post'
import type { TypedRequest, TypedResponse } from '../../types/RequestResponse'
import type Request from './request'
import type Response from './response'
import type CreateMethod from '../../types/Utility/CreateMethod'

export namespace ControllerType {
    export type Create = CreateMethod<
        TypedRequest.Body<Request.Create>, 
        TypedResponse.Json<Response.Create>
    >
    export type Update = CreateMethod<
        TypedRequest.Body<Request.Update>, 
        TypedResponse.Json<Response.Update>
    >
    export type GetOne = CreateMethod<
        TypedRequest.Body<Request.GetOneBody> & TypedRequest.Params<Request.GetOneParams>, 
        TypedResponse.Json<Response.GetOne>
    >
    export type GetMany = CreateMethod<
        TypedRequest.Body<Request.GetManyBody> & TypedRequest.Query<Request.GetManyQuery>, 
        TypedResponse.Json<Response.GetMany>
    >
    export type Delete = CreateMethod<
        TypedRequest.Body<Request.DeleteBody> & TypedRequest.Params<Request.DeleteParams>, 
        TypedResponse.Json<Response.Delete>
    >
    export type Like = CreateMethod<
        TypedRequest.Body<Request.LikeBody> & TypedRequest.Params<Request.LikeParams>,
        TypedResponse.Json<Response.Like>
    >
    export type Dislike = CreateMethod<
        TypedRequest.Body<Request.DislikeBody> & TypedRequest.Params<Request.DislikeParams>,
        TypedResponse.Json<Response.Dislike>
    >
}

type ServiceCreate = {
    user: UserDTO
    title: PostFromDB['title']
    content: PostFromDB['content']
    visibility: PostFromDB['visibility']
}

type ServiceUpdate = {
    user: UserDTO
    title: PostFromDB['title']
    content: PostFromDB['content']
    visibility: PostFromDB['visibility']
    link: PostFromDB['link']
}

type ServiceGetMany = {
    userIds?: string
    page?: string
    title?: PostFromDB['title']
    content?: PostFromDB['content']
    visibility?: PostFromDB['visibility']
}

export namespace ServiceType {
    export type Create = (serviceCreate: ServiceCreate) => Promise<PostDTO>
    export type Update = (serviceUpdate: ServiceUpdate) => Promise<PostDTO>
    export type GetOne = (link: PostFromDB['link']) => Promise<PostDTO | null>
    export type GetMany = (serviceGetMany: ServiceGetMany) => Promise<PostDTO[]>
    export type Delete = (link: PostFromDB['link']) => Promise<void>
    export type Like = (postId: string, userId: string) => Promise<void>
    export type Dislike = (postId: string, userId: string) => Promise<void>
}
