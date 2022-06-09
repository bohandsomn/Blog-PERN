import Path, { routsInput } from '../Path'

class User extends Path {
    protected readonly USER_ROUTE = this.SERVER_ROUTE + '/user'
    
    public readonly GET_SUBSCRIBERS = this.USER_ROUTE + '/get-subscribers'
    public readonly GET_SUBSCRIPTIONS = this.USER_ROUTE + '/get-subscriptions'
    public readonly GET_PREVIEW = this.USER_ROUTE + '/get-preview/'
    public readonly GET_ONE = this.USER_ROUTE + '/get-one/'
    public readonly SUBSCRIBE = this.USER_ROUTE + '/subscribe/'
    public readonly UNSUBSCRIBE = this.USER_ROUTE + '/unsubscribe/'
}

const PATH = new User(routsInput)

export default PATH
