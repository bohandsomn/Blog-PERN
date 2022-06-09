import type { IComment } from '../../database/models/Comment'
import type { PostFromDB } from './post'
import type IUser from './user'

export type CommentFromDB = {
    id: number
    name: IUser['name']
    surname: IUser['surname']
    postId: PostFromDB['id']
    commentatorId: number
    content: string
    time: string
    link: string
}

export default IComment
