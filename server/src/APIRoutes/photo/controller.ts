import photoService from './service'
import Response from '../../services/Response'

import type { ControllerType } from './type'

class Controller {
    getOriginal: ControllerType.GetOriginal = async (request, response, next) => {
        try {
            const { userId } = request.params

            const photo = await photoService.getOriginal(userId)

            response.end(photo)
        } catch (error) {
            next(error)
        }
    }

    getPost: ControllerType.GetPost = async (request, response, next) => {
        try {
            const { userId } = request.params

            const photo = await photoService.getPost(userId)

            response.end(photo)
        } catch (error) {
            next(error)
        }
    }

    getPreview: ControllerType.GetPreview = async (request, response, next) => {
        try {
            const { userId } = request.params

            const photo = await photoService.getPreview(userId)

            response.end(photo)
        } catch (error) {
            next(error)
        }
    }

    getMessage: ControllerType.GetMessage = async (request, response, next) => {
        try {
            const { userId } = request.params

            const photo = await photoService.getMessage(userId)

            response.end(photo)
        } catch (error) {
            next(error)
        }
    }


    set: ControllerType.Set = async (request, response, next) => {
        try {
            const { user } = request.body
            const { file } = request

            const photoDTO = await photoService.convert(file)
            const photoDTOFromDB = await photoService.save(user.id, photoDTO)

            response.json(new Response('Photo settled successfully', photoDTOFromDB))
        } catch (error) {
            next(error)
        }
    }

    update: ControllerType.Update = async (request, response, next) => {
        try {
            const { user } = request.body
            const { file } = request

            const photoDTO = await photoService.convert(file)

            const photoDTOFromDB = await photoService.save(user.id, photoDTO)

            response.json(new Response('Photo updated successfully', photoDTOFromDB))
        } catch (error) {
            next(error)
        }
    }

    getOne: ControllerType.GetOne = async (request, response, next) => {
        try {
            const { userId } = request.query
            const { user } = request.body
            
            const photoDTO = await photoService.getOne(userId === undefined ? user.id: userId || user.id)

            response.json(new Response('Photo uploaded successfully', photoDTO))
        } catch (error) {
            next(error)
        }
    }

    delete: ControllerType.Delete = async (request, response, next) => {
        try {
            const { user } = request.body

            await photoService.delete(user.id)

            response.json(new Response('Photo successfully deleted', null))
        } catch (error) {
            next(error)
        }
    }
}

export default new Controller()