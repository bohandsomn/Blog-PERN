import Message from '../message/request'

type ClientEvents = {
    messageCreate: Message.Create
    messageGetMany: Message.GetMany
    messageGetLastMessage: Message.GetLastMessage
}

export default ClientEvents
