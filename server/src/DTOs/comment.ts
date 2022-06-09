import type { CommentFromDB } from '../types/entities/comment'
import type IPhoto from '../types/entities/photo'
import type IUser from '../types/entities/user'
import type FollowCommentDTO from './followComment'

type Input = {
    id: CommentFromDB['id']
    postId: CommentFromDB['postId']
    name: IUser['name']
    surname: IUser['surname']
    commentatorId: CommentFromDB['commentatorId']
    content: CommentFromDB['content']
    time: CommentFromDB['time']
    photo: IPhoto['message']
    link: CommentFromDB['link']
    follow: FollowCommentDTO
}

export default class ChatDTO {
    public readonly id: Input['id']
    public readonly postId: Input['postId']
    public readonly name: Input['name']
    public readonly surname: Input['surname']
    public readonly commentatorId: Input['commentatorId']
    public readonly content: Input['content']
    public readonly time: number
    public readonly photo: Input['photo']
    public readonly link: Input['link']
    public readonly follow: Input['follow']

    constructor({ id, postId, name, surname, commentatorId, content, time, photo, link, follow }: Input) {
        this.id = id
        this.postId = postId
        this.name = name
        this.surname = surname
        this.commentatorId = commentatorId
        this.content = content
        this.time = parseInt(time)
        this.photo = photo
        this.link = link
        this.follow = follow
    }
}