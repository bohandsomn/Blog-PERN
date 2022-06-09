import type { UserData } from '../../types/entities/user'
import type CreateResponseUtility from '../../types/Utility/CreateResponse'

namespace Response {
    export type Registration = CreateResponseUtility<UserData>
    export type Login = CreateResponseUtility<UserData>
    export type Update = CreateResponseUtility<UserData>
    export type AutoLogin = CreateResponseUtility<UserData>
    export type Logout = CreateResponseUtility<null> 
    export type Activation = string
    export type Refresh = CreateResponseUtility<UserData>
}

export default Response
