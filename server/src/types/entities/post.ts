import type ChatDTO from '../../DTOs/comment'
import type IUser from './user'
import type { IPost } from '../../database/models/Post'

export type PostFromDB = {
    id: number
    name: IUser['name']
    surname: IUser['surname']
    userId: IUser['id']
    title: string
    content: string
    time: string
    visibility: 'PUBLIC' | 'PRIVATE'
    link: string
}

export default IPost
