import { CreationOptional, DataTypes, ForeignKey, Model, Optional } from 'sequelize'
import sequelize from '../sequelize'

import type User from './User'

export type ActivationT = {
    id: CreationOptional<number>
    user_id: ForeignKey<User['id']>
    link: string
    is_activation: boolean 
}

class Activation extends Model<ActivationT, Optional<ActivationT, 'id'>> implements ActivationT {
    declare readonly id: ActivationT['id']
    declare readonly user_id: ActivationT['user_id']
    declare readonly link: ActivationT['link']
    declare readonly is_activation: ActivationT['is_activation']
}

Activation.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    is_activation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false
    }
}, { 
    sequelize,
    modelName: 'Activation',
    tableName: 'activation',
    createdAt: false,
    updatedAt: false
})

export default Activation
