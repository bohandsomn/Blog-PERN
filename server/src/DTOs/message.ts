import IMessage from '../types/entities/message'
import IUser from '../types/entities/user'
import IPhoto from '../types/entities/photo'

type Input = {
    id: IMessage['id']
    photo: IPhoto['message'] | null
    content: IMessage['content']
    time: IMessage['time']
    senderId: IUser['id']
    name: IUser['name']
    surname: IUser['surname']
}

export default class MessageDTO {
    public readonly id: Input['id']
    public readonly photo: Input['photo']
    public readonly content: Input['content']
    public readonly time: Input['time']
    public readonly senderId: Input['senderId']
    public readonly name: Input['name']
    public readonly surname: Input['surname']

    constructor({id, photo, content, time, senderId, name, surname}: Input) {
        this.id = id
        this.photo = photo
        this.content = content
        this.time = parseInt(time as never as string)
        this.senderId = senderId
        this.name = name
        this.surname = surname
    }

}