import WebSocket from '../../services/WebSocket'
import { addCurrentMessage, setCurrentMessages } from '../../store/slices/current'
import { ClientEvents, Events } from '../../types/Events'

class Message extends WebSocket {
    setMany = (...request: Parameters<ClientEvents[Events.messageGetMany]>) => {
        return this.IO(Events.messageGetMany, request, setCurrentMessages)
    }

    add = (...request: Parameters<ClientEvents[Events.messageCreate]>) => {
        return this.IO(Events.messageCreate, request, addCurrentMessage)
    }
}

export default Message
