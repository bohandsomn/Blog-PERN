import { routsInput } from '../Path'
import { Post } from '../post/path'

class Comment extends Post {
    protected readonly COMMENT_ROUTE = this.POST_ROUTE + '/comment'

    public readonly CREATE = this.COMMENT_ROUTE + '/create'
    public readonly UPDATE = this.COMMENT_ROUTE + '/update'
    public readonly DELETE = this.COMMENT_ROUTE + '/delete/'
    public readonly LIKE = this.COMMENT_ROUTE + '/like/'
    public readonly DISLIKE = this.COMMENT_ROUTE + '/dislike/'
}

const PATH = new Comment(routsInput)

export default PATH
