import type { AfterCheckAccessBody } from '../../middlewares/checkAccess'
import type { CommentFromDB } from '../../types/entities/comment'
import type { PostFromDB } from '../../types/entities/post'

namespace Request {
    export type Create = AfterCheckAccessBody & Pick<CommentFromDB, 'content'> & {
        postLink: PostFromDB['link']
    }
    export type Update = AfterCheckAccessBody & Pick<CommentFromDB, 'content' | 'link'> 
    export type Delete = Pick<CommentFromDB, 'link'>
    export type LikeParams = {
        commentId: string
    }
    export type LikeBody = AfterCheckAccessBody
    export type DislikeParams = {
        commentId: string
    }
    export type DislikeBody = AfterCheckAccessBody
}

export default Request
