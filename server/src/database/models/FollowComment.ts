import { CreationOptional, DataTypes, ForeignKey, Model, Optional } from 'sequelize'
import sequelize from '../sequelize'

import type Comment from './Comment'
import type User from './User'

export type IFollowComment = {
    id: CreationOptional<number>
    comment_id: ForeignKey<Comment['id']>
    commentator_id: ForeignKey<User['id']>
    is_follow: boolean | null
}

class FollowComment extends Model<IFollowComment, Optional<IFollowComment, 'id'>> implements IFollowComment {
    declare readonly id: IFollowComment['id']
    declare readonly comment_id: IFollowComment['comment_id']
    declare readonly commentator_id: IFollowComment['commentator_id']
    declare readonly is_follow: IFollowComment['is_follow']
}

FollowComment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    is_follow: DataTypes.BOOLEAN
}, { 
    sequelize,
    modelName: 'FollowComment',
    tableName: 'follow_comment',
    createdAt: false,
    updatedAt: false
})

export default FollowComment
