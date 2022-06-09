import type MessageDTO from '../../../DTOs/message'
import type CreateResponse from '../../../types/Utility/Socket/CreateResponse'

namespace Response {
    export type Create = CreateResponse<MessageDTO>
    export type GetMany = CreateResponse<{ chatId: number, messages: MessageDTO[]}>
    export type GetLastMessage = CreateResponse<MessageDTO | null>
}

export default Response
