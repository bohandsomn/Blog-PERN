import type Post from '../../../../server/src/APIRoutes/post/request'
import type OmitUser from '../../types/Utility/OmitUser'

namespace Request {
    export type Create = OmitUser<Post.Create> 
    export type Update = OmitUser<Post.Update> 
    export type GetOneBody = OmitUser<Post.GetOneBody> 
    export type GetOneParams = Post.GetOneParams['link']
    export type GetManyBody = OmitUser<Post.DeleteBody> 
    export type GetManyQuery = Post.GetManyQuery 
    export type DeleteParams = Post.DeleteParams['link'] 
    export type LikeParams = Post.LikeParams['postId']
    export type DislikeParams = Post.DislikeParams['postId']
}

export default Request
