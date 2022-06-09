import { CreationOptional, DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../sequelize'

export type IUser = {
    id: CreationOptional<number>
    name: string
    surname: string | null
    email: string
    login: string
    password: string
    birthday: string | null
    privacy: 'PRIVATE' | 'PUBLIC' | null
}

class User extends Model<IUser, Optional<IUser, 'id' | 'surname' | 'privacy'>> implements IUser {
    declare readonly id: IUser['id']
    declare readonly name: IUser['name']
    declare readonly surname: IUser['surname']
    declare readonly email: IUser['email']
    declare readonly login: IUser['login']
    declare readonly password: IUser['password']
    declare readonly birthday: IUser['birthday']
    declare readonly privacy: IUser['privacy']
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.TIME,
        allowNull: true
    },
    privacy: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, { 
    sequelize,
    modelName: 'User',
    tableName: 'user',
    createdAt: false,
    updatedAt: false
})

export default User
