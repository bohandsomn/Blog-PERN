import { Op } from 'sequelize'

import { FollowPost } from '../../../database/models'

import type { ServiceType } from '../type'

class Servise {
    setLikeDislike = async (postId: string, userId: string, isFollow: boolean) => {
        FollowPost.findOne({
            where: {
                [Op.and]: {
                    post_id: postId,
                    user_id: userId
                }
            }
        })
            .then((postFollow) => {
                if (postFollow) {
                    return postFollow.update({
                        is_follow: isFollow
                    })
                }

                return FollowPost.create({
                    user_id: parseInt(userId),
                    post_id: parseInt(postId),
                    is_follow: isFollow
                })
            })
    }

    like: ServiceType.Like = async (postId, userId) => {
        this.setLikeDislike(postId, userId, true)
    }

    dislike: ServiceType.Dislike = async (postId, userId) => {
        this.setLikeDislike(postId, userId, false)
    }
}

export default new Servise()
