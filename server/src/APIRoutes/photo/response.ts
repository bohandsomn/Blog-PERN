import type PhotoDTO from '../../DTOs/photo'
import type CreateResponseUtility from '../../types/Utility/CreateResponse'

namespace Response {
    export type Set = CreateResponseUtility<PhotoDTO>
    export type Update = CreateResponseUtility<PhotoDTO>
    export type GetOne = CreateResponseUtility<PhotoDTO | null>
    export type Delete = CreateResponseUtility<null>
}

export default Response
