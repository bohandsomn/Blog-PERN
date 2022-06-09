import type ChatDTO from '../../DTOs/comment'
import type UserDTO from '../../DTOs/user'
import type { CommentFromDB } from '../../types/entities/comment'
import type { PostFromDB } from '../../types/entities/post'
import type CreateMethod from '../../types/Utility/CreateMethod'
import type { TypedRequest, TypedResponse } from '../../types/RequestResponse'
import type Request from './request'
import type Response from './response'
import FollowCommentDTO from '../../DTOs/followComment'

export namespace ControllerType {
    export type Create = CreateMethod<
        TypedRequest.Body<Request.Create>, 
        TypedResponse.Json<Response.Create>
    >
    export type Update = CreateMethod<
        TypedRequest.Body<Request.Update>, 
        TypedResponse.Json<Response.Update>
    >
    export type Delete = CreateMethod<
        TypedRequest.Params<Request.Delete>, 
        TypedResponse.Json<Response.Delete>
    >
    export type Like = CreateMethod<
        TypedRequest.Params<Request.LikeParams> & TypedRequest.Body<Request.LikeBody>,
        TypedResponse.Json<Response.Like>
    >
    export type Dislike = CreateMethod<
        TypedRequest.Params<Request.DislikeParams> & TypedRequest.Body<Request.DislikeBody>,
        TypedResponse.Json<Response.Dislike>
    >
}

type ServiseCreate = {
    user: UserDTO
    postLink: PostFromDB['link']
    content: CommentFromDB['content']
}

export namespace ServiceType {
    export type GetOne = (link: CommentFromDB['link']) => Promise<ChatDTO | null>
    export type GetMany = (postId: PostFromDB['id']) => Promise<ChatDTO[]>
    export type GetOneFollow = (link: CommentFromDB['link']) => Promise<FollowCommentDTO>
    export type GetManyFollow = (link: CommentFromDB['link']) => Promise<ChatDTO | null>
    export type Create = (serviseCreate: ServiseCreate) => Promise<ChatDTO>
    export type Update = (link: CommentFromDB['link'], content: CommentFromDB['content']) => Promise<ChatDTO>
    export type Delete = (link: CommentFromDB['link']) => Promise<void>
    export type Like = (commentId: string, commentatorId: string) => Promise<void>
    export type Dislike = (commentId: string, commentatorId: string) => Promise<void>
}