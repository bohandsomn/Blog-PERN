import type FollowComment from '../types/entities/followComment'

type Input = {
    isFollow: FollowComment['is_follow'] 
    likes: number
    dislikes: number
}

export default class FollowCommentDTO {
    public readonly isFollow: Input['isFollow']
    public readonly likes: Input['likes']
    public readonly dislikes: Input['dislikes']

    constructor({ isFollow, likes, dislikes }: Input) {
        this.isFollow = isFollow
        this.likes = likes
        this.dislikes = dislikes
    }
} 