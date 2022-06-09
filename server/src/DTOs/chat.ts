import { ChatPreview } from '../types/entities/chat'

type Input = {
    id: ChatPreview['id']
    name: ChatPreview['name']
    photoSource: ChatPreview['photoSource']
    lastMessage: ChatPreview['lastMessage'] | null
    link: ChatPreview['link']
}

export default class ChatDTO {
    public readonly id: Input['id']
    public readonly name: Input['name']
    public readonly photoSource: Input['photoSource']
    public readonly lastMessage: Input['lastMessage']
    public readonly link: Input['link']

    constructor({ id, name, photoSource, lastMessage, link }: Input) {
        this.id = id
        this.name = name
        this.photoSource = photoSource
        this.lastMessage = lastMessage
        this.link = link
    }
}