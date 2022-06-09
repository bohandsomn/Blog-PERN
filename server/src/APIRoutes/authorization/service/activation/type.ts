import type ActivationType from '../../../../types/entities/activation'
import type User from '../../../../types/entities/user'

type ServiceSet = {
    userId: ActivationType['user_id']
    link: ActivationType['link']
    isActivation: ActivationType['is_activation']
}

export namespace ServiceType {
    export type Set = (serviceSet: ServiceSet) => Promise<ActivationType>
    export type GetById = (userId: User['id']) => Promise<ActivationType>
    export type Activation = (link: ActivationType['link']) => Promise<ActivationType>
}
