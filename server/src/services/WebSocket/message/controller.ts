import Controller from '../Controller'
import Events from '../Events'
import service from '.'

import type ClientEvents from '../Events/Client'
import Response from '../../Response'

class Message extends Controller {
    create: ClientEvents[Events.messageCreate] = async (request) => {
        try {
            const messageDTO = await service.create(request)

            this.socket.emit(Events.messageCreate, new Response('Successful message creation', messageDTO))
        } catch (error) {
            this._handleError(Events.messageCreate, error)
        }
    }

    getMany: ClientEvents[Events.messageGetMany] = async (request) => {
        try {
            const messagesDTO = await service.getMany(request)

            this.socket.emit(Events.messageGetMany, new Response('Messages loaded successfully', messagesDTO))
        } catch (error) {
            this._handleError(Events.messageGetMany, error)
        }
    }

    getLastMessage: ClientEvents[Events.messageGetLastMessage] = async (request) => {
        try {
            const messageDTO = await service.getLastMessage(request)

            this.socket.emit(Events.messageGetLastMessage, new Response('Last message loaded successfully', messageDTO))
        } catch (error) {
            this._handleError(Events.messageGetLastMessage, error)
        }
    }
}

export default Message
