import { CreationOptional, DataTypes, ForeignKey, Model, Optional } from 'sequelize'
import sequelize from '../sequelize'

import type Chat from './Chat'
import type User from './User'

export type IUserChat = {
    id: CreationOptional<number>
    user_id: ForeignKey<User['id']>
    chat_id: ForeignKey<Chat['id']>
}

class UserChat extends Model<IUserChat, Optional<IUserChat, 'id'>> implements IUserChat {
    declare readonly id: IUserChat['id']
    declare readonly user_id: IUserChat['user_id']
    declare readonly chat_id: IUserChat['chat_id']
}

UserChat.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, { 
    sequelize,
    modelName: 'UserChat',
    tableName: 'user_chat',
    createdAt: false,
    updatedAt: false
})

export default UserChat
