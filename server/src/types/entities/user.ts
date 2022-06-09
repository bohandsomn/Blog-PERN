import type { IUser } from '../../database/models/User'

import type { Tokens } from './token'
import type UserDTO from '../../DTOs/user'
import type IPhoto from './photo'

export type UserPreview = {
    id: IUser['id']
    name: IUser['name']
    surname: IUser['surname']
    photo: IPhoto['preview'] | null
}

export type UserData = {
    accessToken: Tokens['accessToken'],
    user: UserDTO
}

export default IUser
