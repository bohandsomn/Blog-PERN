import { CreationOptional, DataTypes, ForeignKey, Model, Optional } from 'sequelize'
import sequelize from '../sequelize'

import type User from './User'

export type IToken = {
    id: CreationOptional<number>
    user_id: ForeignKey<User['id']>
    refresh: string
}

class Token extends Model<IToken, Optional<IToken, 'id'>> implements IToken {
    declare readonly id: IToken['id']
    declare readonly user_id: IToken['user_id']
    declare readonly refresh: IToken['refresh']
}

Token.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    refresh: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, { 
    sequelize,
    modelName: 'Token',
    tableName: 'token',
    createdAt: false,
    updatedAt: false
})

export default Token
