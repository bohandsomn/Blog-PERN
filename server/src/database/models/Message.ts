import { CreationOptional, DataTypes, ForeignKey, Model, Optional } from 'sequelize'
import sequelize from '../sequelize'

import type Chat from './Chat'
import type User from './User'

export type IMessage = {
    id: CreationOptional<number>
    chat_id: ForeignKey<Chat['id']>
    sender_id: ForeignKey<User['id']>
    content: string
    time: number
}

class Message extends Model<IMessage, Optional<IMessage, 'id'>> implements IMessage {
    declare readonly id: IMessage['id']
    declare readonly chat_id: IMessage['chat_id']
    declare readonly sender_id: IMessage['sender_id']
    declare readonly content: IMessage['content']
    declare readonly time: IMessage['time']
}

Message.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    content: DataTypes.STRING,
    time: DataTypes.TIME
}, { 
    sequelize,
    modelName: 'Message',
    tableName: 'message',
    createdAt: false,
    updatedAt: false
})

export default Message
