import { CreationOptional, DataTypes, ForeignKey, Model, Optional } from 'sequelize'
import sequelize from '../sequelize'

import type User from './User'

export type IPhoto = {
    id: CreationOptional<number>
    user_id: ForeignKey<User['id']>
    original: string
    post: string
    preview: string
    message: string
}

class Photo extends Model<IPhoto, Optional<IPhoto, 'id'>> implements IPhoto {
    declare readonly id: IPhoto['id']
    declare readonly user_id: IPhoto['user_id']
    declare readonly original: IPhoto['original']
    declare readonly post: IPhoto['post']
    declare readonly preview: IPhoto['preview']
    declare readonly message: IPhoto['message']
}

Photo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    original: DataTypes.STRING,
    post: DataTypes.STRING,
    preview: DataTypes.STRING,
    message: DataTypes.STRING
}, { 
    sequelize,
    modelName: 'Photo',
    tableName: 'photo',
    createdAt: false,
    updatedAt: false
})

export default Photo
