import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { io } from 'socket.io-client'

import Notify from '../api/Notify'
import { useAppDispatch } from '../hooks'

import type { ClientEvents, Keys, ServerEvents } from '../types/Events'
import type { CreateResponseUtility } from '../types/CreateResponseUtility'

class WebSocket {
    protected static readonly socket = io('http://localhost:5000/')
    protected readonly dispatch = useAppDispatch()

    constructor() {
        WebSocket.socket.on('connect', () => { })
    }

    protected readonly notify = <T extends CreateResponseUtility<T['data']>>(template: T, toastId: React.ReactText) => {
        Notify.UpdateToInfo(toastId, template.message)

        return template.data
    }

    protected readonly IO = <E extends Keys, Data extends Parameters<ServerEvents[E]>[0]["data"]>(event: E, request: Parameters<ClientEvents[E]>, action: ActionCreatorWithPayload<Data>) => {
        const toastId = Notify.Loading()

        WebSocket.socket
            .emit(event, ...request)
            .on(event as Keys, async (template: Parameters<ServerEvents[E]>[0]) => {
                const data = this.notify(template, toastId)

                this.dispatching(data, action as any)
            })
    }

    protected readonly dispatching = <Data>(data: Data, action: ActionCreatorWithPayload<Data>) => {
        this.dispatch(action(data))
    }
}

export default WebSocket
