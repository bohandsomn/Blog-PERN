import { CreationOptional, DataTypes, ForeignKey, Model, Optional } from 'sequelize'
import sequelize from '../sequelize'

import type Chat from './Chat'

export type IPhotoChat = {
    id: CreationOptional<number>
    chat_id: ForeignKey<Chat['id']>
    original: string
    post: string
    preview: string
    message: string
}

class PhotoChat extends Model<IPhotoChat, Optional<IPhotoChat, 'id'>> implements IPhotoChat {
    declare readonly id: IPhotoChat['id']
    declare readonly chat_id: IPhotoChat['chat_id']
    declare readonly original: IPhotoChat['original']
    declare readonly post: IPhotoChat['post']
    declare readonly preview: IPhotoChat['preview']
    declare readonly message: IPhotoChat['message']
}

PhotoChat.init({
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
    modelName: 'PhotoChat',
    tableName: 'photo_chat',
    createdAt: false,
    updatedAt: false
})

export default PhotoChat
