export class User {
    protected readonly USER_ROUTE = '/user'

    public readonly GET_SUBSCRIBERS = this.USER_ROUTE + '/get-subscribers'
    public readonly GET_SUBSCRIPTIONS = this.USER_ROUTE + '/get-subscriptions'
    public readonly GET_PREVIEW = this.USER_ROUTE + '/get-preview'
    public readonly GET_ONE = this.USER_ROUTE + '/get-one/:subscriberId'
    public readonly SUBSCRIBE = this.USER_ROUTE + '/subscribe/:subscriberId'
    public readonly UNSUBSCRIBE = this.USER_ROUTE + '/unsubscribe/:subscriberId'
}

const USER = new User()

export default USER as {
    readonly GET_SUBSCRIBERS: 'http://domain-name:port/api/user/get-subscribers'
    readonly GET_SUBSCRIPTIONS: 'http://domain-name:port/api/user/get-subscriptions'
    readonly GET_PREVIEW: 'http://domain-name:port/api/user/get-preview'
    readonly GET_ONE: 'http://domain-name:port/api/user/get-one/:subscriberId'
    readonly SUBSCRIBE: 'http://domain-name:port/api/user/subscribe/:subscriberId'
    readonly UNSUBSCRIBE: 'http://domain-name:port/api/user/unsubscribe/:subscriberId'
}