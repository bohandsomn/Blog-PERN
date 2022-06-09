import { Post } from '../post/path'

class PostComment extends Post {
    protected readonly COMMENT_ROUTE = this.POST_ROUTE + '/comment'

    public readonly CREATE = this.COMMENT_ROUTE + '/create'
    public readonly UPDATE = this.COMMENT_ROUTE + '/update'
    public readonly DELETE = this.COMMENT_ROUTE + '/delete/:link'
    public readonly LIKE = this.COMMENT_ROUTE + '/like/:commentId'
    public readonly DISLIKE = this.COMMENT_ROUTE + '/dislike/:commentId'
}

const POST_COMMENT = new PostComment()

export default POST_COMMENT as {
    readonly CREATE: 'http://domain-name:port/api/post/comment/create'
    readonly UPDATE: 'http://domain-name:port/api/post/comment/update'
    readonly DELETE: 'http://domain-name:port/api/post/comment/delete/:link'
    readonly LIKE: 'http://domain-name:port/api/post/comment/like/:commentId'
    readonly DISLIKE: 'http://domain-name:port/api/post/comment/dislike/:commentId'
}
