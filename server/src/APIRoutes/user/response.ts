import type PrivateUserDTO from '../../DTOs/privateUser'
import type PublicUserDTO from '../../DTOs/publicUser'
import type { UserPreview } from '../../types/entities/user'
import type CreateResponseUtility from '../../types/Utility/CreateResponse'

namespace Response {
    export type GetSubscribers = CreateResponseUtility<UserPreview[]>
    export type GetSubscriptions = CreateResponseUtility<UserPreview[]>
    export type GetPreview = CreateResponseUtility<UserPreview[]>
    export type GetOne = CreateResponseUtility<PublicUserDTO | PrivateUserDTO>
    export type Subscribe = CreateResponseUtility<null>
    export type Unsubscribe = CreateResponseUtility<null>
}

export default Response
