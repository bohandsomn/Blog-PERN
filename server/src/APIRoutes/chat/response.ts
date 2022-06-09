import type ChatDTO from '../../DTOs/chat'
import type CreateResponseUtility from '../../types/Utility/CreateResponse'

namespace Response {
    export type Create = CreateResponseUtility<ChatDTO>
    export type GetOne = CreateResponseUtility<ChatDTO>
    export type GetPhoto = CreateResponseUtility<ChatDTO>
    export type GetMany = CreateResponseUtility<ChatDTO[]>
    export type GetManyByName = CreateResponseUtility<ChatDTO[]>
    export type Update = CreateResponseUtility<ChatDTO>
    export type UpdateLastMessage = CreateResponseUtility<ChatDTO>
    export type SetPhoto = CreateResponseUtility<ChatDTO>
    export type Delete = CreateResponseUtility<null>
}

export default Response
