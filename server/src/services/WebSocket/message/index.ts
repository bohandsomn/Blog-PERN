import { Message } from '../../../database/models'
import MessageDTO from '../../../DTOs/message'
import HttpException from '../../../Exception/Http'
import userService from '../../../APIRoutes/user/service'

import type { ServiceType } from './type'
import Pagination from '../../Pagination'
import { GET_MESSAGE } from '../../../APIRoutes/photo/path'

class Service {
    create: ServiceType.Create = async ({ chatId, senderId, content }) => {
        const time = Date.now()

        const message = await Message.create({
            chat_id: chatId,
            sender_id: senderId,
            content,
            time: time
        })

        const userPreview = await userService.getPreview(message.sender_id)

        if (userPreview === null) {
            throw HttpException.NotFound('User is not found')
        }

        return new MessageDTO({
            id: message.id, 
            photo: GET_MESSAGE + userPreview.id, 
            content: message.content, 
            time: message.time, 
            senderId: message.sender_id, 
            name: userPreview.name, 
            surname: userPreview.surname
        })
    }

    getMany: ServiceType.GetMany = async ({ chatId, page }) => {
        const messadesDTO = await Message
            .findAll({
                where: {
                    chat_id: chatId
                }
            })
            .then((messages) => {
                const chank = Pagination.getChank(messages)

                return chank[page] as Message[] | undefined
            })
            .then((messages) => {
                if (messages === undefined) {
                    return []
                }

                return messages.map(async (message) => {
                    const userPreview = await userService.getPreview(message.sender_id)

                    if (userPreview === null) {
                        throw HttpException.NotFound('User is not found')
                    }

                    return new MessageDTO({
                        id: message.id, 
                        photo: GET_MESSAGE + userPreview.id, 
                        content: message.content, 
                        time: message.time, 
                        senderId: message.sender_id, 
                        name: userPreview.name, 
                        surname: userPreview.surname
                    })
                })
            })

        return {
            chatId,
            messages: await Promise.all(messadesDTO)
        }
    }

    getLastMessage: ServiceType.GetLastMessage = async (chatId) => {
        const messages = await Message
            .findAll({
                where: {
                    chat_id: chatId
                }
            })
        
        const lastMessage = messages.at(-1)

        if (lastMessage === undefined) {
            return null
        }

        const userPreview = await userService.getPreview(lastMessage.sender_id)

        if (userPreview === null) {
            throw HttpException.NotFound('User is not found')
        }

        return new MessageDTO({
            id: lastMessage.id, 
            photo: GET_MESSAGE + userPreview.id, 
            content: lastMessage.content, 
            time: lastMessage.time, 
            senderId: lastMessage.sender_id, 
            name: userPreview.name, 
            surname: userPreview.surname
        })
    }
}

export default new Service()
