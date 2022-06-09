import config from 'config'

class Path {
    protected readonly CHAT_ROUTE = '/chat'

    public readonly CREATE = this.CHAT_ROUTE + '/create'
    public readonly GET_ONE = this.CHAT_ROUTE + '/get-one/:chatId'
    public readonly GET_PHOTO = this.CHAT_ROUTE + '/get-photo/:chatId'
    public readonly GET_MANY = this.CHAT_ROUTE + '/get-many/:userId'
    public readonly GET_MANY_BY_NAME = this.CHAT_ROUTE + '/get-many-by-name/:name'
    public readonly UPDATE = this.CHAT_ROUTE + '/update'
    public readonly UPDATE_LAST_MESSAGE = this.CHAT_ROUTE + '/update-last-message'
    public readonly SET_PHOTO = this.CHAT_ROUTE + '/set-photo/:chatId'
    public readonly DELETE = this.CHAT_ROUTE + '/delete/:link'
}

const PATH = new Path()

const API_URL = config.get<string>('API_URL')

export const GET_PHOTO = API_URL + '/api' + PATH.GET_PHOTO.replace(/:chatId/, '')

export default PATH as {
    readonly CREATE: 'http://domain-name:port/api/chat/create'
    readonly GET_ONE: 'http://domain-name:port/api/chat/get-one/:chatId'
    readonly GET_PHOTO: 'http://domain-name:port/api/chat/get-photo/:chatId'
    readonly GET_MANY: 'http://domain-name:port/api/chat/get-many/:userId'
    readonly GET_MANY_BY_NAME: 'http://domain-name:port/api/chat/get-many-by-name/:name'
    readonly UPDATE: 'http://domain-name:port/api/chat/update'
    readonly UPDATE_LAST_MESSAGE: 'http://domain-name:port/api/chat/update-last-message'
    readonly SET_PHOTO: 'http://domain-name:port/api/chat/set-photo'
    readonly DELETE: 'http://domain-name:port/api/chat/delete/:link'
}