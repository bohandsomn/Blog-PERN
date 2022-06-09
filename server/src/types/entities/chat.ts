import type { IChat } from '../../database/models/Chat'
import type MessageDTO from '../../DTOs/message'

export type ChatPreview = {
    id: IChat['id']
    name: IChat['name']
    photoSource: IChat['photo_src']
    lastMessage: MessageDTO
    link: IChat['link']
}

export default IChat
