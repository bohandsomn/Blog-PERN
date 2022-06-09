import type CreateRequest from '../../../types/Utility/Socket/CreateRequest'
import type IMessage from '../../../types/entities/message'

namespace Request {
    export type Create = CreateRequest<{
        chatId: IMessage['chat_id']
        senderId: IMessage['sender_id']
        content: IMessage['content']
    }>
    export type GetMany = CreateRequest<{
        chatId: IMessage['chat_id']
        page: number
    }>
    export type GetLastMessage = CreateRequest<IMessage['chat_id']>
}

export default Request
