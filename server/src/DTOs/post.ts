import type IPhoto from '../types/entities/photo'
import type IPost from '../types/entities/post'
import type IUser from '../types/entities/user'
import type ChatDTO from './comment'

type Input = {
    id: IPost['id']
    userId: IUser['id']
    title: IPost['title']
    content: IPost['content']
    time: IPost['time']
    visibility: IPost['visibility']
    link: IPost['link']
    photo: IPhoto['post']
    comments: ChatDTO[]
}

export default class PostDTO {
    public readonly id: Input['id']
    public readonly userId: Input['userId']
    public readonly title: Input['title']
    public readonly content: Input['content']
    public readonly time: number
    public readonly visibility: Input['visibility']
    public readonly link: Input['link']
    public readonly photo: Input['photo']
    public readonly comments: Input['comments']

    constructor({ id, userId, title, content, time, visibility, link, photo, comments }: Input) {
        this.id = id
        this.userId = userId
        this.title = title
        this.content = content
        this.time = parseInt(time)
        this.visibility = visibility
        this.link = link
        this.photo = photo
        this.comments = comments
    }
}
