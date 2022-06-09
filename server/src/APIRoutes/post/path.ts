export class Post {
    protected readonly POST_ROUTE = '/post'

    public readonly CREATE = this.POST_ROUTE + '/create'
    public readonly UPDATE = this.POST_ROUTE + '/update'
    public readonly GET_ONE = this.POST_ROUTE + '/get-one/:link'
    public readonly GET_MANY = this.POST_ROUTE + '/get-many'
    public readonly DELETE = this.POST_ROUTE + '/delete/:link'
    public readonly LIKE = this.POST_ROUTE + '/like/:postId'
    public readonly DISLIKE = this.POST_ROUTE + '/dislike/:postId'
}

const POST = new Post()

export default POST as {
    readonly CREATE: 'http://domain-name:port/api/post/create'
    readonly UPDATE: 'http://domain-name:port/api/post/update'
    readonly GET_ONE: 'http://domain-name:port/api/post/get-one/:link'
    readonly GET_MANY: 'http://domain-name:port/api/post/get-many'
    readonly DELETE: 'http://domain-name:port/api/post/delete/:link'
    readonly LIKE: 'http://domain-name:port/api/post/like/:link'
    readonly DISLIKE: 'http://domain-name:port/api/post/dislike/:link'
}
