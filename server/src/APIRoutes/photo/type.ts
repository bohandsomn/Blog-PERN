import type PhotoDTO from "../../DTOs/photo"
import type User from "../../types/entities/user"
import type { TypedRequest, TypedResponse } from "../../types/RequestResponse"
import type Request from "./request"
import type Response from "./response"
import type CreateMethod from "../../types/Utility/CreateMethod"

export namespace ControllerType {
    export type GetOriginal = CreateMethod<
        TypedRequest.Params<Request.GetOriginalParams>
    >
    export type GetPost = CreateMethod<
        TypedRequest.Params<Request.GetPostParams>
    >
    export type GetPreview = CreateMethod<
        TypedRequest.Params<Request.GetPreviewParams>
    >
    export type GetMessage = CreateMethod<
        TypedRequest.Params<Request.GetMessageParams>
    >
    export type Set = CreateMethod<
        TypedRequest.Body<Request.Set>, 
        TypedResponse.Json<Response.Set>
    > 
    export type Update = CreateMethod<
        TypedRequest.Body<Request.Update>, 
        TypedResponse.Json<Response.Update>
    > 
    export type GetOne = CreateMethod<
        TypedRequest.Body<Request.GetOneBody> & TypedRequest.Query<Request.GetOneQuery>, 
        TypedResponse.Json<Response.GetOne>
    > 
    export type Delete = CreateMethod<
        TypedRequest.Body<Request.Delete>, 
        TypedResponse.Json<Response.Delete>
    > 
}

export namespace ServiceType {
    export type Get = (userId: string, type: 'original' | 'post' | 'preview' | 'message') => Promise<Buffer>
    export type GetOriginal = (userId: string) => Promise<Buffer>
    export type GetPost = (userId: string) => Promise<Buffer>
    export type GetPreview = (userId: string) => Promise<Buffer>
    export type GetMessage = (userId: string) => Promise<Buffer>
    export type Convert = (file: Express.Multer.File | undefined) => Promise<PhotoDTO> 
    export type Save = (userId: User['id'], photoDTO: PhotoDTO) => Promise<PhotoDTO> 
    export type Set = (userId: User['id'], photoDTO: PhotoDTO) => Promise<PhotoDTO> 
    export type Update = (userId: User['id'], photoDTO: PhotoDTO) => Promise<PhotoDTO> 
    export type GetOne = (userId: User['id'] | string) => Promise<PhotoDTO | null> 
    export type Delete = (userId: User['id']) => Promise<void>
}
