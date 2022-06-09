import type ChatDTO from '../../DTOs/comment'
import type CreateResponseUtility from '../../types/Utility/CreateResponse'

namespace Response {
    export type Create = CreateResponseUtility<ChatDTO>    
    export type Update = CreateResponseUtility<ChatDTO>    
    export type Delete = CreateResponseUtility<null>    
    export type Like = CreateResponseUtility<null>    
    export type Dislike = CreateResponseUtility<null>
}

export default Response
