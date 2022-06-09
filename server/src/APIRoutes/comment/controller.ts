import checkError from '../../validation/checkError'
import Response from '../../services/Response'
import commentService from './service'

import type { ControllerType } from "./type"
import commentFollowService from './service/comment-follow'

class Controller {
    create: ControllerType.Create = async (request, response, next) => {
        try {
            checkError(request)

            const { user, postLink, content } = request.body

            const commentDTO = await commentService.create({ user, postLink, content })

            response.json(new Response('Successful comment creation', commentDTO))
        } catch (error) {
            next(error)
        }
    }

    update: ControllerType.Update = async (request, response, next) => {
        try {
            checkError(request)
            
            const { content, link } = request.body

            const commentDTO = await commentService.update(link, content)

            response.json(new Response('Comment updated successfully', commentDTO))
        } catch (error) {
            next(error)
        }
    }

    delete: ControllerType.Delete = async (request, response, next) => {
        try {
            const { link } = request.params

            await commentService.delete(link)

            response.json(new Response('Comment successfully deleted', null))
        } catch (error) {            
            next(error)
        }
    }

    like: ControllerType.Like = async (request, response, next) => {
        try {
            const { user } = request.body
            const { commentId } = request.params

            console.log(user, commentId)

            await commentFollowService.like(commentId, user.id)

            response.json(new Response('Like successfully dropped', null))
        } catch (error) {
            next(error)
        }
    }

    dislike: ControllerType.Dislike = async (request, response, next) => {
        try {
            const { user } = request.body
            const { commentId } = request.params

            await commentFollowService.dislike(commentId, user.id)

            response.json(new Response('Dislike successfully dropped', null))
        } catch (error) {
            next(error)
        }
    }
}

export default new Controller()
