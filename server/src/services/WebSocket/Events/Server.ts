import Message from '../message/response'

type ServerEvents = {
    messageCreate: Message.Create
    messageGetMany: Message.GetMany
    messageGetLastMessage: Message.GetLastMessage
}

export default ServerEvents
