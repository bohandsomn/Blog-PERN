import config from 'config'

class Photo {
    protected readonly PHOTO_ROUTE = '/photo'

    public readonly GET_ORIGINAL = this.PHOTO_ROUTE + '/get-original/:userId'
    public readonly GET_POST = this.PHOTO_ROUTE + '/get-post/:userId'
    public readonly GET_PREVIEW = this.PHOTO_ROUTE + '/get-preview/:userId'
    public readonly GET_MESSAGE = this.PHOTO_ROUTE + '/get-message/:userId'
    public readonly SET = this.PHOTO_ROUTE + '/set'
    public readonly UPDATE = this.PHOTO_ROUTE + '/update'
    public readonly GET_ONE = this.PHOTO_ROUTE + '/get-one'
    public readonly DELETE = this.PHOTO_ROUTE + '/delete'
}

const PHOTO = new Photo() 

const API_URL = config.get<string>('API_URL')

export const GET_ORIGINAL = API_URL + '/api' + PHOTO.GET_ORIGINAL.replace(/:userId/, '')
export const GET_POST = API_URL + '/api' + PHOTO.GET_POST.replace(/:userId/, '')
export const GET_PREVIEW = API_URL + '/api' + PHOTO.GET_PREVIEW.replace(/:userId/, '')
export const GET_MESSAGE = API_URL + '/api' + PHOTO.GET_MESSAGE.replace(/:userId/, '')

export default PHOTO as {
    readonly GET_ORIGINAL: 'http://domain-name:port/api/photo/get-original/:userId'
    readonly GET_POST: 'http://domain-name:port/api/photo/get-post/:userId'
    readonly GET_PREVIEW: 'http://domain-name:port/api/photo/get-preview/:userId'
    readonly GET_MESSAGE: 'http://domain-name:port/api/photo/get-message/:userId'
    readonly SET: 'http://domain-name:port/api/photo/set'
    readonly UPDATE: 'http://domain-name:port/api/photo/update'
    readonly GET_ONE: 'http://domain-name:port/api/photo/get-one'
    readonly DELETE: 'http://domain-name:port/api/photo/delete'
}