import User from '../../types/entities/user'
import { AfterCheckAccessBody } from '../../middlewares/checkAccess'
import Token from '../../types/entities/token'
import ActivationT from '../../types/entities/activation'

namespace Request {
    export type Registration = Pick<User, 'name' | 'email' | 'login' | 'password' | 'privacy'>
    export type Login = Pick<User, 'email' | 'password'>
    export type Update = Omit<User, 'id'> & AfterCheckAccessBody
    export type AutoLogin = AfterCheckAccessBody
    export type Logout = Partial<Pick<Token, 'refresh'>>
    export type Activation = Pick<ActivationT, 'link'>
    export type Refresh = Partial<Pick<Token, 'refresh'>>
}

export default Request
