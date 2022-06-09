import { v4 } from 'uuid'
import { Chat, PhotoChat, UserChat } from '../../database/models'
import ChatDTO from '../../DTOs/chat'
import HttpException from '../../Exception/Http'
import messageService from '../../services/WebSocket/message'
import { GET_PHOTO } from './path'

import type { ServiceType } from './type'

class Service {
    create: ServiceType.Create = async ({ userId, name, privacy }) => {
        const link = v4()

        const chat = await Chat.create({
            name,
            link,
            privacy,
        })

        await UserChat.create({
            user_id: userId,
            chat_id: chat.id
        })

        const lastMessage = await messageService.getLastMessage(chat.id)

        return new ChatDTO({
            id: chat.id, 
            name: chat.name, 
            photoSource: chat.photo_src, 
            lastMessage: lastMessage, 
            link: chat.link
        })
    }

    getOne: ServiceType.GetOne = async (rule) => {
        const chat = await Chat
            .findOne({
                where: rule
            })

        if (chat === null) {
            throw HttpException.NotFound('Chat is not found')
        }

        const lastMessage = await messageService.getLastMessage(chat.id)

        return new ChatDTO({
            id: chat.id, 
            name: chat.name, 
            photoSource: chat.photo_src, 
            lastMessage: lastMessage, 
            link: chat.link
        })
    }

    getPhoto: ServiceType.GetPhoto = async (id) => {
        const photo = await PhotoChat.findOne({
            where: {
                chat_id: id
            }
        })

        if (photo === null) {
            return null
        }

        return Buffer.from(photo.preview, 'base64')
    }

    getMany: ServiceType.GetMany = async (userId) => {
        const userChats = await UserChat
            .findAll({
                where: {
                    user_id: userId
                }
            })
            
        const chatsDTO = userChats.map(({ chat_id }) => this.getOne({ id: chat_id }))

        return Promise.all(chatsDTO)
    }

    getManyByName: ServiceType.GetManyByName = async (name) => {
        const chats = await Chat
            .findAll({
                where: {
                    name
                }
            })
            
        const chatsDTO = chats.map(({ id }) => this.getOne({ id }))

        return Promise.all(chatsDTO)
    }

    update: ServiceType.Update = async ({ id, name, privacy }) => {
        await Chat.update({
            name, 
            privacy
        }, {
            where: {
                id
            }
        })

        return this.getOne({ id })
    }

    updateLastMessage: ServiceType.UpdateLastMessage = async ({ id, messageId }) => {
        await Chat.update({
            last_message_id: messageId
        }, {
            where: {
                id
            }
        })

        return this.getOne({ id })
    }

    setPhoto: ServiceType.SetPhoto = async (chatId, photoDTO) => {
        await PhotoChat.findOne({
            where: {
                chat_id: chatId
            }
        })
            .then((photoChat) => {
                if (photoChat) {
                    return photoChat.update(photoDTO)
                }

                return PhotoChat.create({
                    ...photoDTO,
                    chat_id: parseInt(chatId)
                })
            })

        await Chat.update({
            photo_src: GET_PHOTO + chatId
        }, {
            where: {
                id: chatId
            }
        })

        return this.getOne({ id: parseInt(chatId) })
    }

    delete: ServiceType.Delete = async (link) => {
        await Chat.destroy({
            where: {
                link
            }
        })

        return null
    }
}

export default new Service()
