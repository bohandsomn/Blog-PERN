import { CreationOptional, DataTypes, ForeignKey, Model, Optional } from 'sequelize'
import sequelize from '../sequelize'

import type Post from './Post'
import type User from './User'

export type IComment = {
    id: CreationOptional<number>
    post_id: ForeignKey<Post['id']>
    commentator_id: ForeignKey<User['id']>
    content: string
    time: string
    link: string
}

class Comment extends Model<IComment, Optional<IComment, 'id'>> implements IComment {
    declare readonly id: IComment['id']
    declare readonly post_id: IComment['post_id']
    declare readonly commentator_id: IComment['commentator_id']
    declare readonly content: IComment['content']
    declare readonly time: IComment['time']
    declare readonly link: IComment['link']
}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    content: DataTypes.STRING,
    time: DataTypes.TIME,
    link: DataTypes.STRING
}, { 
    sequelize,
    modelName: 'Comment',
    tableName: 'comment',
    createdAt: false,
    updatedAt: false
})

export default Comment
