import type IChat from '../../types/entities/chat'
import type IMessage from '../../types/entities/message'
import { AfterCheckAccessBody } from '../../middlewares/checkAccess'

namespace Request {
    export type Create = AfterCheckAccessBody & Pick<IChat, 'name' | 'privacy'>
    export type GetOne = { chatId:  string }
    export type GetPhoto = { chatId:  string }
    export type GetMany = { userId:  string }
    export type GetManyByName = Pick<IChat, 'name'>
    export type Update = Pick<IChat, 'id' | 'name' | 'privacy'>
    export type UpdateLastMessage = { messageId: IMessage['id'] } & Pick<IChat, 'id'>
    export type SetPhoto = { chatId: string }
    export type Delete = Pick<IChat, 'link'>
}

export default Request
