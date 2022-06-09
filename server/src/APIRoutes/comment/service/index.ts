import { v4 } from 'uuid'

import { Comment, Post, User } from '../../../database/models'
import ChatDTO from '../../../DTOs/comment'
import HttpException from '../../../Exception/Http'
import sequelize from '../../../database/sequelize'
import commentFollowService from './comment-follow'
import { GET_MESSAGE } from '../../photo/path'

import type { ServiceType } from '../type'
import type { CommentFromDB } from '../../../types/entities/comment'

class Service {
    getOne: ServiceType.GetOne = async (link) => {
        const comment = await Comment.findOne({
            attributes: [
                'id',
                ['post_id', 'postId'],
                ['commentator_id', 'commentatorId'],
                'content',
                'time',
                'link',
            ],
            include: [
                {
                    model: User,
                    attributes: ['name', 'surname']
                }
            ],
            where: {
                link
            }
        }) as never as CommentFromDB

        const FollowCommentDTO = await commentFollowService.getOne(link)

        if (comment === null) {
            return null
        }

        const commentDTO = new ChatDTO({
            id: comment.id, 
            postId: comment.postId,
            name: comment.name, 
            surname: comment.surname, 
            commentatorId: comment.commentatorId, 
            content: comment.content, 
            time: comment.time, 
            photo: GET_MESSAGE + comment.commentatorId, 
            link: comment.link, 
            follow: FollowCommentDTO
        })

        return commentDTO
    }

    getMany: ServiceType.GetMany = async (postId) => {
        const comments = await sequelize.query(`
            SELECT 
                "comment"."id",
                "comment"."post_id" AS "postId",
                "user"."name",
                "user"."surname",
                "comment"."commentator_id" AS "commentatorId",
                "comment"."content",
                "comment"."time",
                "comment"."link"
            FROM "comment"
            LEFT JOIN "user"
            ON "user"."id" = "comment"."commentator_id"
            LEFT JOIN "post"
            ON "post"."id" = "comment"."post_id"
            WHERE "comment"."post_id" = '${postId}'
            GROUP BY "comment"."id", "user"."name", "user"."surname";
        `)
            .then((result) => {
                const comments = result[0] as CommentFromDB[]

                return comments.map(async (comment) => {
                    return new ChatDTO({
                        id: comment.id, 
                        postId: comment.postId, 
                        name: comment.name, 
                        surname: comment.surname, 
                        commentatorId: comment.commentatorId, 
                        content: comment.content, 
                        time: comment.time, 
                        photo: GET_MESSAGE + comment.commentatorId, 
                        link: comment.link, 
                        follow: await commentFollowService.getOne(comment.link)
                    })
                })
            })

        return Promise.all(comments)
    }

    create: ServiceType.Create = async ({ user, postLink, content }) => {
        const time = Date.now()
        const link = v4()

        const post = await Post.findOne({
            where: {
                link: postLink
            }
        })

        if (post === null) {
            throw HttpException.NotFound('Post is not found')
        }

        await Comment.create(
            {
                post_id: post.id,
                commentator_id: user.id,
                content,
                time: time.toString(),
                link
            },
            {
                returning: false
            }
        )

        const commentDTO = await this.getOne(link)

        if (commentDTO === null) {
            throw HttpException.InternalServerError()
        }

        return commentDTO
    }

    update: ServiceType.Update = async (link, content) => {
        await Comment.update(
            {
                content
            }, 
            {
                where: {
                    link
                }
            }
        )

        const commentDTO = await this.getOne(link)

        if (commentDTO === null) {
            throw HttpException.InternalServerError()
        }

        return commentDTO
    }

    delete: ServiceType.Delete = async (link) => {
        await Comment.destroy({
            where: {
                link
            }
        })
    }
}

export default new Service()
