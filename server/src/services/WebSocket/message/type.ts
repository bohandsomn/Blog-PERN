import type MessageDTO from '../../../DTOs/message'
import type IMessage from '../../../types/entities/message'

type ServiceCreate = {
    chatId: IMessage['chat_id']
    senderId: IMessage['sender_id']
    content: IMessage['content']
}

type ServiceGetMany = {
    chatId: IMessage['chat_id']
    page: number
}

export namespace ServiceType {
    export type Create = (serviceCreate: ServiceCreate) => Promise<MessageDTO>
    export type GetMany = (serviceGetMany: ServiceGetMany) => Promise<{ chatId: number, messages: MessageDTO[]}>
    export type GetLastMessage = (chatId: IMessage['chat_id']) => Promise<MessageDTO | null>
}
