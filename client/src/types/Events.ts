import type ClientEvents from '../../../server/src/services/WebSocket/Events/Client'
import type ServerEvents from '../../../server/src/services/WebSocket/Events/Server'

enum Events {
    messageCreate = 'messageCreate',
    messageGetMany = 'messageGetMany',
    messageGetLastMessage = 'messageGetLastMessage'
}

export type Keys = keyof ClientEvents

export {
    ClientEvents, 
    ServerEvents,
    Events
}
