import { CreationOptional, DataTypes, ForeignKey, Model, Optional } from 'sequelize'
import sequelize from '../sequelize'

import type Subscribe from './Subscribe'
import type User from './User'

export type ISubscription = {
    id: CreationOptional<number>
    user_id: ForeignKey<User['id']>
    subscriber_id: ForeignKey<Subscribe['id']>
}

class Subscription extends Model<ISubscription, Optional<ISubscription, 'id'>> implements ISubscription {
    declare readonly id: ISubscription['id']
    declare readonly user_id: ISubscription['user_id']
    declare readonly subscriber_id: ISubscription['subscriber_id']
}

Subscription.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, { 
    sequelize,
    modelName: 'Subscription',
    tableName: 'subscription',
    createdAt: false,
    updatedAt: false
})

export default Subscription
