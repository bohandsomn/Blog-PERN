import { CreationOptional, DataTypes, ForeignKey, Model, Optional } from 'sequelize'
import sequelize from '../sequelize'
import Message from './Message'

export type IChat = {
    id: CreationOptional<number>
    name: string
    photo_src: string | null
    last_message_id: ForeignKey<Message['id']> | null
    link: string
    privacy: 'PUBLIC' | 'PRIVATE'
}

class Chat extends Model<IChat, Optional<IChat, 'id' | 'photo_src'>> implements IChat {
    declare readonly id: IChat['id']
    declare readonly name: IChat['name']
    declare readonly photo_src: IChat['photo_src']
    declare readonly last_message_id: IChat['last_message_id']
    declare readonly link: IChat['link']
    declare readonly privacy: IChat['privacy']
}

Chat.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    photo_src: {
        type: DataTypes.STRING,
        allowNull: true
    },
    link: {
        type: DataTypes.STRING,
        unique: true
    }, 
    privacy: DataTypes.STRING
}, { 
    sequelize,
    modelName: 'Chat',
    tableName: 'chat',
    createdAt: false,
    updatedAt: false
})

export default Chat
