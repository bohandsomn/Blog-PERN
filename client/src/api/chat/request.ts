import type Chat from '../../../../server/src/APIRoutes/chat/request'
import type OmitUser from '../../types/Utility/OmitUser'

namespace Request {
    export type Create = OmitUser<Chat.Create>
    export type GetOne = Chat.GetOne['chatId']
    export type GetMany = Chat.GetMany['userId']
    export type GetManyByName = Chat.GetManyByName['name']
    export type Update = Chat.Update
    export type UpdateLastMessage = Chat.UpdateLastMessage
    export type SetPhoto = Chat.SetPhoto['chatId']
    export type Delete = Chat.Delete['link']
}

export default Request
