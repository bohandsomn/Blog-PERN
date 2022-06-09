import type { TypedRequest, TypedResponse } from '../../types/RequestResponse'
import type Request from './request'
import type Response from './response'
import type CreateMethod from '../../types/Utility/CreateMethod'
import type { StylesData, Theme } from '../../types/entities/styles'

export namespace ControllerType {
    export type Get = CreateMethod<
        TypedRequest.Body<Request.Get>, 
        TypedResponse.Json<Response.Get>
    >
    export type UpdateGeneral = CreateMethod<
        TypedRequest.Body<Request.UpdateGeneral>, 
        TypedResponse.Json<Response.UpdateGeneral>
    >
    export type UpdateDark = CreateMethod<
        TypedRequest.Body<Request.UpdateDark>, 
        TypedResponse.Json<Response.UpdateDark>
    >
    export type UpdateLight = CreateMethod<
        TypedRequest.Body<Request.UpdateLight>, 
        TypedResponse.Json<Response.UpdateLight>
    >
}

export namespace ServiceType {
    export type Get = () => StylesData
    export type UpdateGeneral = (newData: object) => StylesData & Theme<'general'>
    export type UpdateDark = (newData: object) => StylesData & Theme<'dark'>
    export type UpdateLight = (newData: object) => StylesData & Theme<'light'>
}
