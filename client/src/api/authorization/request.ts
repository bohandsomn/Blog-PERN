import type Authorization from '../../../../server/src/APIRoutes/authorization/request'
import type OmitUser from '../../types/Utility/OmitUser'

namespace Request {
    export type Update = OmitUser<Authorization.Update>
    export type AutoLogin = OmitUser<Authorization.AutoLogin>
    export type Logout = Omit<Authorization.Logout, 'refresh'>
    export type Refresh = Omit<Authorization.Refresh, 'refresh'>
    export type Login = Authorization.Login
    export type Registration = Authorization.Registration
    export type Activation = Authorization.Activation['link']
}

export default Request