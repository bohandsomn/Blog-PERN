import { Activation } from '../../../../database/models'
import HttpException from '../../../../Exception/Http'

import type { ServiceType } from './type'

class Service {
    set: ServiceType.Set = async ({ userId, link, isActivation }) => {
        const activation = await Activation.create({
            user_id: userId,
            link,
            is_activation: isActivation
        })

        return activation
    }

    getById: ServiceType.GetById = async (userId) => {
        const activation = await Activation.findOne({
            where: {
                user_id: userId
            }
        })
        
        if (activation === null) {
            throw HttpException.NotFound('Activation link is not found')
        }

        return activation
    }
    
    activation: ServiceType.Activation = async (link) => {
        const activation = await Activation.update(
            {
                is_activation: true
            },
            {
                where: {
                    link
                },
                returning: true
            }
        ).then(([ , [activation]]) => activation)
        
        if (activation === undefined) {
            throw HttpException.NotFound('Activation link is not found')
        }

        return activation
    }
}

export default new Service()