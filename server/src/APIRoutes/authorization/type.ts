import type UserDTO from '../../DTOs/user'
import type User from '../../types/entities/user'
import type { UserData } from '../../types/entities/user'
import type { TypedRequest, TypedResponse } from '../../types/RequestResponse'
import type Request from './request'
import type Response from './response'
import type CreateMethod from '../../types/Utility/CreateMethod'

export namespace ControllerType {
    export type Registration = CreateMethod<
        TypedRequest.Body<Request.Registration>, 
        TypedResponse.Json<Response.Registration>
    >
    export type Login = CreateMethod<
        TypedRequest.Body<Request.Login>, 
        TypedResponse.Json<Response.Login>
    >
    export type Update = CreateMethod<
        TypedRequest.Body<Request.Update>, 
        TypedResponse.Json<Response.Update>
    >
    export type AutoLogin = CreateMethod<
        TypedRequest.Body<Request.AutoLogin>, 
        TypedResponse.Json<Response.Login>
    >
    export type Logout = CreateMethod<
        TypedRequest.Cookies<Request.Logout>, 
        TypedResponse.Json<Response.Logout>
    >
    export type Activation = CreateMethod<
        TypedRequest.Params<Request.Activation>, 
        TypedResponse.Redirect<Response.Activation>
    >
    export type Refresh = CreateMethod<
        TypedRequest.Cookies<Request.Refresh>, 
        TypedResponse.Json<Response.Refresh>
    >
}

type ServiceRegistration = Pick<User, 'name' | 'email' | 'login' | 'password' | 'privacy'> 
type ServiceLogin = Pick<User, 'email' | 'password'> 
type ServiceUpdate = Pick<User, 'name' | 'surname' | 'email' | 'login' | 'password' | 'birthday' | 'privacy'> & {
    user: UserDTO
}
interface UserDataWithRefreshToken extends UserData {
    refreshToken: string
}

export namespace ServiceType {
    export type Registration = (serviceRegistration: ServiceRegistration) => Promise<UserDataWithRefreshToken>
    export type Login = (serviceLogin: ServiceLogin) => Promise<UserDataWithRefreshToken> 
    export type Update = (serviceUpdate: ServiceUpdate) => Promise<UserDataWithRefreshToken>
    export type AutoLogin = (userId: User['id']) => Promise<UserDataWithRefreshToken>
    export type Logout = (refreshToken: string | undefined) => Promise<void>
    export type Activation = (link: string) => Promise<void> 
    export type Refresh = (refreshToken: string | undefined) => Promise<UserDataWithRefreshToken>
}
