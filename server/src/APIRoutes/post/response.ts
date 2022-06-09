import type PostDTO from '../../DTOs/post'
import type CreateResponseUtility from '../../types/Utility/CreateResponse'

namespace Response {
    export type Create = CreateResponseUtility<PostDTO>
    export type Update = CreateResponseUtility<PostDTO>
    export type GetOne = CreateResponseUtility<PostDTO | null>
    export type GetMany = CreateResponseUtility<PostDTO[]>
    export type Delete = CreateResponseUtility<null>
    export type Like = CreateResponseUtility<null>
    export type Dislike = CreateResponseUtility<null>
}

export default Response
