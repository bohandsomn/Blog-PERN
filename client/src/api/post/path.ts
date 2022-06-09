import Path, { routsInput } from '../Path'

export class Post extends Path {
    protected readonly POST_ROUTE = this.SERVER_ROUTE + '/post'

    public readonly CREATE = this.POST_ROUTE + '/create'
    public readonly UPDATE = this.POST_ROUTE + '/update'
    public readonly GET_ONE = this.POST_ROUTE + '/get-one/'
    public readonly GET_MANY = this.POST_ROUTE + '/get-many/'
    public readonly DELETE = this.POST_ROUTE + '/delete/'
    public readonly LIKE = this.POST_ROUTE + '/like/'
    public readonly DISLIKE = this.POST_ROUTE + '/dislike/'
}

const PATH = new Post(routsInput)

export default PATH
