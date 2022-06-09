

import { Op } from 'sequelize'

import { FollowComment } from '../../../database/models'
import sequelize from '../../../database/sequelize'
import FollowCommentDTO from '../../../DTOs/followComment'
import { FollowCommentFromDB } from '../../../types/entities/followComment'

import type { ServiceType } from '../type'

class Service {
    setLikeDislike = async (commentId: string, commentatorId: string, isFollow: boolean) => {
        FollowComment.findOne({
            where: {
                [Op.and]: {
                    comment_id: parseInt(commentId),
                    commentator_id: parseInt(commentatorId)
                }
            }
        })
            .then((postFollow) => {
                if (postFollow) {
                    return postFollow.update({
                        is_follow: isFollow
                    })
                }

                return FollowComment.create({
                    comment_id: parseInt(commentId),
                    commentator_id: parseInt(commentatorId),
                    is_follow: isFollow
                })
            })
    }

    like: ServiceType.Like = async (commentId, commentatorId) => {
        this.setLikeDislike(commentId, commentatorId, true)
    }

    dislike: ServiceType.Dislike = async (commentId, commentatorId) => {
        this.setLikeDislike(commentId, commentatorId, false)
    }

    getOne: ServiceType.GetOneFollow = async (link) => {
        return sequelize.query(`
            SELECT 
                "follow_comment"."is_follow" as "isFollow",
                COUNT(1) FILTER(WHERE "follow_comment"."is_follow" IS TRUE) AS "likes",
                COUNT(1) FILTER(WHERE "follow_comment"."is_follow" IS FALSE) AS "dislikes"
            FROM "follow_comment"
            LEFT JOIN "comment"
            ON "follow_comment"."commentator_id" = "comment"."commentator_id"
            WHERE "comment"."link" = '${link}'
			GROUP BY "follow_comment"."is_follow";
        `)
            .then((result) => {
                const followCommentFromDB = result[0][0] as FollowCommentFromDB | undefined

                if (followCommentFromDB === undefined) {
                    return new FollowCommentDTO({
                        isFollow: null,
                        likes: 0,
                        dislikes: 0
                    })
                }

                return new FollowCommentDTO({
                    isFollow: followCommentFromDB.isFollow,
                    likes: followCommentFromDB.likes,
                    dislikes: followCommentFromDB.dislikes
                })
            })
    }
}

export default new Service()
