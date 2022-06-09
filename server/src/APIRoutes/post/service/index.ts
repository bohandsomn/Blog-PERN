import { v4 } from 'uuid'
import { Op } from 'sequelize'

import { Post } from '../../../database/models'
import HttpException from '../../../Exception/Http'
import PostDTO from '../../../DTOs/post'
import sequelize from '../../../database/sequelize'
import commentServise from '../../comment/service'

import type { ServiceType } from '../type'
import type { PostFromDB } from '../../../types/entities/post'
import { GET_POST } from '../../photo/path'
import Pagination from '../../../services/Pagination'

class Service {
    create: ServiceType.Create = async ({ user, title, content, visibility }) => {
        const time = Date.now()
        const link = v4()

        await Post.create({
            user_id: user.id, 
            title, 
            content, 
            time: time.toString(), 
            visibility, 
            link
        })

        const postDTO = await this.getOne(link)

        if (postDTO === null) {
            throw HttpException.InternalServerError()
        }

        return postDTO
    }

    update: ServiceType.Update = async ({ user, title, content, visibility, link }) => {
        await Post.update(
            {
                title,
                content,
                visibility
            }, 
            {
                where: {
                    [Op.and]: {
                        link,
                        user_id: user.id
                    }
                }
            }
        )

        const postDTO = await this.getOne(link)

        if (postDTO === null) {
            throw HttpException.InternalServerError()
        }
    
        return postDTO
    }

    getOne: ServiceType.GetOne = async (link) => {
        const post = await sequelize
            .query(`
                SELECT 
                    "post"."id",  
                    "post"."user_id" AS "userId",
                    "post"."title", 
                    "post"."content", 
                    "post"."time", 
                    "post"."visibility", 
                    "post"."link"
                FROM "post" 
                LEFT JOIN "photo"
                ON "photo"."user_id" = "post"."user_id"
                WHERE link = '${link}';
            `)
            .then(([postFromDB]) => postFromDB[0] as PostFromDB | undefined )

        if (post === undefined) {
            return null
        }

        const postDTO = new PostDTO({
            id: post.id,
            userId: post.userId,
            title: post.title,
            content: post.content,
            time: post.time,
            visibility: post.visibility,
            link: post.link,
            photo: GET_POST + post.userId,
            comments: await commentServise.getMany(post.id)
        })
    
        return postDTO
    }

    getMany: ServiceType.GetMany = async ({ userIds, title, content, visibility, page }) => {
        const postsDTO = await sequelize.query(`
            SELECT 
                "post"."id",  
                "post"."user_id" AS "userId",
                "post"."title", 
                "post"."content", 
                "post"."time", 
                "post"."visibility", 
                "post"."link"
            FROM "post" 
            LEFT JOIN "photo"
            ON "photo"."user_id" = "post"."user_id"
            WHERE "post"."user_id" IN (${userIds || null}) OR 
                (
                    visibility LIKE '%${visibility || 'PUBLIC'}%' AND 
                    title LIKE '%${title || ''}%' AND 
                    content LIKE '%${content || ''}%' 
                );
            `)
            .then((result) => {
                const postsFromDB = result[0] as PostFromDB[]

                if (page === undefined) {
                    return result
                }

                const chank = Pagination.getChank(postsFromDB)

                return [chank[parseInt(page)] || [], result[1]]
            })
            .then(([postsFromDB]) => {
                return (postsFromDB as PostFromDB[]).map(async ({ id, userId, title, content, time, visibility, link }) => {
                    return new PostDTO({ 
                        id, 
                        userId, 
                        title, 
                        content, 
                        time, 
                        visibility, 
                        link, 
                        photo: GET_POST + userId, 
                        comments: await commentServise.getMany(id) 
                    })
                })
            })

        return Promise.all(postsDTO)
    }

    delete: ServiceType.Delete = async (link) => {
        await Post.destroy({
            where: {
                link
            },
            cascade: true,
        })
    }
}

export default new Service()
