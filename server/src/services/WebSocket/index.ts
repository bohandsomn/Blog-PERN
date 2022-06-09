import socket from 'socket.io'
import http from 'http'
import config from 'config'

import Message from './message/controller'
import Events from './Events'
import type ClientEvents from './Events/Client'
import type ServerEvents from './Events/Server'

const CLIENT_URL = config.get<string>('CLIENT_URL')

class WebSocket {
    public readonly io

    constructor(server: http.Server) {
        this.io = new socket.Server<ClientEvents, ServerEvents>(server, {
            cors: {
                origin: CLIENT_URL,
                allowedHeaders: ["authorization"],
                credentials: true
            }
        })
    }

    connection = () => {
        this.io.on("connection", async (socket) => {
            const message = new Message(socket)

            socket.on(Events.messageCreate, message.create)
            socket.on(Events.messageGetLastMessage, message.getLastMessage)
            socket.on(Events.messageGetMany, message.getMany)
        })
    }
}

export default WebSocket
