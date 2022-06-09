import { CreationOptional, DataTypes, ForeignKey, Model, Optional } from 'sequelize'
import sequelize from '../sequelize'

import type Post from './Post'
import type User from './User'

export type IFollowPost = {
    id: CreationOptional<number>
    post_id: ForeignKey<Post['id']>
    user_id: ForeignKey<User['id']>
    is_follow: boolean
}

class FollowPost extends Model<IFollowPost, Optional<IFollowPost, 'id'>> implements IFollowPost {
    declare readonly id: IFollowPost['id']
    declare readonly post_id: IFollowPost['post_id']
    declare readonly user_id: IFollowPost['user_id']
    declare readonly is_follow: IFollowPost['is_follow']
}

FollowPost.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    is_follow: DataTypes.BOOLEAN
}, { 
    sequelize,
    modelName: 'FollowPost',
    tableName: 'follow_post',
    createdAt: false,
    updatedAt: false
})

export default FollowPost
