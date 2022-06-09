import { Op } from 'sequelize'

import sequelize from '../../database/sequelize'
import { Photo, Subscribe, Subscription, User } from '../../database/models'
import PrivateUserDTO from '../../DTOs/privateUser'
import PublicUserDTO from '../../DTOs/publicUser'
import HttpException from '../../Exception/Http'
import { GET_PREVIEW } from '../photo/path'

import type { UserPreview } from '../../types/entities/user'
import type { ServiceType } from './type'

class Service {
    getSubscribers: ServiceType.GetSubscribers = async (userId) => {
        const subscribeIds = await Subscribe
            .findAll({
                where: {
                    user_id: userId
                }
            })
            .then((subscriptions) => subscriptions.map(({ subscription_id }) => subscription_id))

        const subscribers = await User.findAll({
            attributes: ['id', 'name', 'surname'],
            include: {
                model: Photo,
                attributes: [['preview', 'photo']]
            },
            where: {
                id: {
                    [Op.in]: subscribeIds
                }
            }
        })

        return subscribers as never as UserPreview[]
    }

    getSubscriptions: ServiceType.GetSubscriptions = async (userId) => {
        const subscribeIds = await Subscription
            .findAll({
                where: {
                    user_id: userId
                }
            })
            .then((subscriptions) => subscriptions.map(({ subscriber_id }) => subscriber_id))

        const subscribers = await User.findAll({
            attributes: ['id', 'name', 'surname'],
            include: {
                model: Photo,
                attributes: [['preview', 'photo']]
            },
            where: {
                id: {
                    [Op.in]: subscribeIds
                }
            }
        })

        return subscribers as never as UserPreview[]
    }

    getPreviewByFullname: ServiceType.GetPreviewByFullname = async (fullname) => {
        const usersPreview = await User
            .findAll({
                attributes: ['id', 'name', 'surname'],
                where: [
                    sequelize.where(
                        sequelize.fn(
                            'lower', 
                            sequelize.fn('concat', sequelize.col('name'), ' ', sequelize.col('surname'))
                        ),
                        Op.like,
                        sequelize.fn(
                            'lower', 
                            '%' + fullname + '%'
                        )
                    )
                ]
            })
            .then((users) => {
                return (users).map(({ id, name, surname }) => {
                    return {
                        id, 
                        name, 
                        surname, 
                        photo: GET_PREVIEW + id
                    }
                })
            })

        return usersPreview 
    }

    getPreview: ServiceType.GetPreview = async (userId) => {
        const user = await User
            .findOne({
                attributes: ['id', 'name', 'surname'],
                include: {
                    model: Photo,
                    attributes: [['preview', 'photo']]
                },
                where: {
                    id: userId
                }
            })

        if (user === null) {
            return null
        }

        return {
            id: user.id,
            name: user.name,
            surname: user.surname,
            photo: GET_PREVIEW + user.id
        }
    }

    getOne: ServiceType.GetOne = async (userId, subscriberId) => {
        const subscriber = await User.findByPk(subscriberId)

        if (subscriber === null) {
            throw HttpException.NotFound('User is not found')
        }

        const isSubscriber = await Subscribe.findOne({
            where: {
                user_id: userId,
                subscription_id: subscriberId
            }
        })
            .then((subscriber) => subscriber !== null)

        if (subscriber.privacy === 'PRIVATE') {
            const privateUserDTO = new PrivateUserDTO({
                id: subscriber.id, 
                name: subscriber.name, 
                surname: subscriber.surname, 
                birthday: subscriber.birthday, 
                privacy: subscriber.privacy,
                isSubscriber
            })

            return privateUserDTO
        }

        const publicUserDTO = new PublicUserDTO({
            id: subscriber.id, 
            name: subscriber.name, 
            surname: subscriber.surname, 
            email: subscriber.email, 
            login: subscriber.login, 
            birthday: subscriber.birthday, 
            privacy: subscriber.privacy,
            isSubscriber
        })

        return publicUserDTO
    }
  
    subscribe: ServiceType.Subscribe = async (userId, subscriberId) => {
        await sequelize.query(`
            INSERT INTO "subscribe" ("user_id", "subscription_id") 
            VALUES (${userId},${subscriberId})
        `)

        await sequelize.query(`
            INSERT INTO "subscription" ("user_id", "subscriber_id") 
            VALUES (${subscriberId},${userId})
        `)

        return null
    }

    unsubscribe: ServiceType.Unsubscribe = async (userId, subscriberId) => {
        await Subscribe.destroy({
            where: {
                [Op.and]: {
                    user_id: userId,
                    subscription_id: parseInt(subscriberId)
                }
            }
        })

        await Subscription.destroy({
            where: {
                [Op.and]: {
                    user_id: parseInt(subscriberId),
                    subscriber_id: userId
                }
            }
        })
        
        return null
    }
}

export default new Service()