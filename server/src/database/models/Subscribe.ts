import { CreationOptional, DataTypes, ForeignKey, Model, Optional } from 'sequelize'
import sequelize from '../sequelize'

import type Subscription from './Subscription'
import type User from './User'

export type ISubscribe = {
    id: CreationOptional<number>
    user_id: ForeignKey<User['id']>
    subscription_id: ForeignKey<Subscription['id']>
}

class Subscribe extends Model<ISubscribe, Optional<ISubscribe, 'id'>> implements ISubscribe {
    declare readonly id: ISubscribe['id']
    declare readonly user_id: ISubscribe['user_id']
    declare readonly subscription_id: ISubscribe['subscription_id']
}

Subscribe.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, { 
    sequelize,
    modelName: 'Subscribe',
    tableName: 'subscribe',
    createdAt: false,
    updatedAt: false
})

export default Subscribe
