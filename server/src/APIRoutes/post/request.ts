import type { PostFromDB } from '../../types/entities/post'
import type { AfterCheckAccessBody } from '../../middlewares/checkAccess'

namespace Request {
    export type Create = AfterCheckAccessBody & Pick<PostFromDB, 'title' | 'content' | 'visibility'>
    export type Update = AfterCheckAccessBody & Pick<PostFromDB, 'title' | 'content' | 'visibility' | 'link'>
    export type GetOneBody = AfterCheckAccessBody
    export type GetOneParams = Pick<PostFromDB, 'link'>
    export type GetManyBody = {}
    export type GetManyQuery = Pick<PostFromDB,'title' | 'content' | 'visibility'> & { 
        userIds: string 
        page?: string
    }
    export type DeleteBody = AfterCheckAccessBody 
    export type DeleteParams = Pick<PostFromDB, 'link'> 
    export type LikeBody = AfterCheckAccessBody
    export type LikeParams = {
        postId: string
    }
    export type DislikeBody = AfterCheckAccessBody
    export type DislikeParams = {
        postId: string
    }
}

export default Request
