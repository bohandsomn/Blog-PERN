import type { Socket } from 'socket.io'
import HttpException from '../../Exception/Http'

import type ClientEvents from './Events/Client'
import type ServerEvents from './Events/Server'

class Controller {
    constructor(public readonly socket: Socket<ClientEvents, ServerEvents>) {
        this.socket = socket
    }

    protected _handleError = <Event extends keyof ServerEvents>(event: Event, error: unknown) => {
        console.log(error)

        if (error instanceof HttpException) {
            this.socket.emit<keyof ServerEvents>(event, {
                data: null,
                message: error.message
            })

            return
        }

        this.socket.emit<keyof ServerEvents>(event, {
            data: null,
            message: 'Unexpected error'
        })
    }
}

export default Controller
