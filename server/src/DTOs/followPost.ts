import type FollowPost from '../types/entities/followPost'

type Input = {
    isFollow: FollowPost['is_follow']
    likes: number
    dislikes: number
}

export default class FollowPostDTO {
    public readonly isFollow: Input['isFollow']
    public readonly likes: Input['likes']
    public readonly dislikes: Input['dislikes']

    constructor({ isFollow, likes, dislikes }: Input) {
        this.isFollow = isFollow
        this.likes = likes
        this.dislikes = dislikes
    }
}