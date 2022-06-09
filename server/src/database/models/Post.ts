import { CreationOptional, DataTypes, ForeignKey, Model, Optional } from 'sequelize'
import sequelize from '../sequelize'

import type User from './User'

export type IPost = {
    id: CreationOptional<number>
    user_id: ForeignKey<User['id']>
    title: string
    content: string
    time: string
    visibility: 'PUBLIC' | 'PRIVATE'
    link: string 
}

class Post extends Model<IPost, Optional<IPost, 'id'>> implements IPost {
    declare readonly id: IPost['id']
    declare readonly user_id: IPost['user_id']
    declare readonly title: IPost['title']
    declare readonly content: IPost['content']
    declare readonly time: IPost['time']
    declare readonly visibility: IPost['visibility']
    declare readonly link: IPost['link']
}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    visibility: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    }
}, { 
    sequelize,
    modelName: 'Post',
    tableName: 'post',
    createdAt: false,
    updatedAt: false
})

export default Post
