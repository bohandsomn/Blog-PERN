import Path, { routsInput } from '../Path'

class Chat extends Path {
    protected readonly CHAT_ROUTE = this.SERVER_ROUTE + '/chat'

    public readonly CREATE = this.CHAT_ROUTE + '/create'
    public readonly GET_ONE = this.CHAT_ROUTE + '/get-one/' // chatId
    public readonly GET_MANY = this.CHAT_ROUTE + '/get-many/' // userId
    public readonly GET_MANY_BY_NAME = this.CHAT_ROUTE + '/get-many-by-name/' // name
    public readonly UPDATE = this.CHAT_ROUTE + '/update'
    public readonly UPDATE_LAST_MESSAGE = this.CHAT_ROUTE + '/update-last-message'
    public readonly SET_PHOTO = this.CHAT_ROUTE + '/set-photo/' // chatId
    public readonly DELETE = this.CHAT_ROUTE + '/delete/' // link
}

const PATH = new Chat(routsInput)

export default PATH
