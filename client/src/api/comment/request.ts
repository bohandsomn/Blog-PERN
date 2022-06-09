import type Comment from '../../../../server/src/APIRoutes/comment/request'
import type OmitUser from '../../types/Utility/OmitUser'

namespace Request {
    export type Create = OmitUser<Comment.Create>
    export type Update = OmitUser<Comment.Update>
    export type Delete = Comment.Delete['link']
    export type Like = Comment.LikeParams['commentId']
    export type Dislike = Comment.DislikeParams['commentId']
}

export default Request
