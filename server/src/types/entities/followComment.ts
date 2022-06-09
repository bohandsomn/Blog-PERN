import type { IFollowComment } from '../../database/models/FollowComment'

export type FollowCommentFromDB = {
    isFollow: boolean
    likes: number
    dislikes: number
}

export default IFollowComment
