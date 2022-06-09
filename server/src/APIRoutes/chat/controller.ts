import Response from '../../services/Response'
import checkError from '../../validation/checkError'
import chatService from './service'
import photoService from '../photo/service'
import type { ControllerType } from './type'

class Controller {
    create: ControllerType.Create = async (request, response, next) => {
        try {
            checkError(request)

            const { name, privacy, user } = request.body

            const chatDTO = await chatService.create({ name, privacy, userId: user.id })

            response.json(new Response('Successful chat creation', chatDTO))
        } catch (error) {
            next(error)
        }
    }

    getOne: ControllerType.GetOne = async (request, response, next) => {
        try {
            const { chatId } = request.params

            const chatDTO = await chatService.getOne({ id: parseInt(chatId) })

            response.json(new Response('Chat loaded successfully', chatDTO))
        } catch (error) {
            next(error)
        }
    }

    getPhoto: ControllerType.GetPhoto = async (request, response, next) => {
        const { chatId } = request.params

        const chatPhoto = await chatService.getPhoto(chatId)

        response.end(chatPhoto)
    }

    getMany: ControllerType.GetMany = async (request, response, next) => {
        try {
            const { userId } = request.params

            const chatsDTO = await chatService.getMany(userId)

            response.json(new Response('Chats loaded successfully', chatsDTO))
        } catch (error) {
            next(error)
        }
    }

    getManyByName: ControllerType.GetManyByName = async (request, response, next) => {
        try {
            const { name } = request.params

            const chatsDTO = await chatService.getManyByName(name)

            response.json(new Response('Chats loaded successfully', chatsDTO))
        } catch (error) {
            next(error)
        }
    }

    update: ControllerType.Update = async (request, response, next) => {
        try {
            const chatDTO = await chatService.update(request.body)

            response.json(new Response('Successful chat update', chatDTO))
        } catch (error) {
            next(error)
        }
    }

    updateLastMessage: ControllerType.UpdateLastMessage = async (request, response, next) => {
        try {
            const chatDTO = await chatService.updateLastMessage(request.body)

            response.json(new Response('Last message successfully updated', chatDTO))
        } catch (error) {
            next(error)
        }
    }

    setPhoto: ControllerType.SetPhoto = async (request, response, next) => {
        try {
            const { file } = request
            const { chatId } = request.params
            
            const photoDTO = await photoService.convert(file)

            const chatDTO = await chatService.setPhoto(chatId, photoDTO)

            response.json(new Response('Photo settled successfully', chatDTO))
        } catch (error) {
            next(error)
        }
    }

    delete: ControllerType.Delete = async (request, response, next) => {
        try {
            const { link } = request.params
            
            await chatService.delete(link)

            response.json(new Response('Chat successfully deleted', null))
        } catch (error) {
            next(error)
        }
    }
}

export default new Controller()
