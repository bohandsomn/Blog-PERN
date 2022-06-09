import postService from './service'
import postFollowService from './service/post-follow'
import checkError from '../../validation/checkError'
import Response from '../../services/Response'

import type { ControllerType } from './type'

class Controller {
    create: ControllerType.Create = async (request, response, next) => {
        try {
            checkError(request)

            const { user, title, content, visibility } = request.body
            const postDTO = await postService.create({ user, title, content, visibility })

            response.json(new Response('Successful post creation', postDTO))
        } catch (error) {
            next(error)
        }
    }
    
    update: ControllerType.Update = async (request, response, next) => {
        try {
            checkError(request)

            const { user, title, content, visibility, link } = request.body

            const postDTO = await postService.update({ user, title, content, visibility, link })

            response.json(new Response('Successful post update', postDTO))
        } catch (error) {
            next(error)
        }
    }
    
    getOne: ControllerType.GetOne = async (request, response, next) => {
        try {
            const { link } = request.params

            const postDTO = await postService.getOne(link)

            response.json(new Response('Post loaded successfully', postDTO))
        } catch (error) {
            next(error)
        }
    }

    getMany: ControllerType.GetMany = async (request, response, next) => {
        try {
            const { userIds, title, content, visibility, page } = request.query

            const postsDTO = await postService.getMany({ userIds, title, content, visibility, page })

            response.json(new Response('Posts loaded successfully', postsDTO))
        } catch (error) {
            next(error)
        }
    }
    
    delete: ControllerType.Delete = async (request, response, next) => {
        try {
            const { link } = request.params

            await postService.delete(link)

            response.json(new Response('Post successfully deleted', null))
        } catch (error) {
            next(error)
        }
    }

    like: ControllerType.Like = async (request, response, next) => {
        try {
            const { user } = request.body
            const { postId } = request.params

            await postFollowService.like(postId, user.id)

            response.json(new Response('Like successfully dropped', null))
        } catch (error) {
            next(error)
        }
    }

    dislike: ControllerType.Dislike = async (request, response, next) => {
        try {
            const { user } = request.body
            const { postId } = request.params

            await postFollowService.dislike(postId, user.id)

            response.json(new Response('Disike successfully dropped', null))
        } catch (error) {
            next(error)
        }
    }
}

export default new Controller()