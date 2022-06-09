import jwt from 'jsonwebtoken'
import config from 'config'

import { Token } from '../../../../database/models'
import HttpException from '../../../../Exception/Http'

import type UserDTO from '../../../../DTOs/user'
import type { ServiceType } from './type'

class Service {
    generateTokens: ServiceType.GenerateTokens = (payload) => {
        const JWT_ACCESS_SECRET_KEY = config.get<string>('JWT_ACCESS_SECRET_KEY')
        const JWT_REFRESH_SECRET_KEY = config.get<string>('JWT_REFRESH_SECRET_KEY')

        const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET_KEY, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET_KEY, {expiresIn: '30d'})

        return { accessToken, refreshToken }
    }

    saveToken: ServiceType.SaveToken = async (userId, token) => {
        const isExists = await Token
            .findAll()
            .then((tokens) => tokens.length !== 0)

        if (isExists) {            
            const tokenTable = await Token
                .update(
                    {
                        refresh: token
                    }, 
                    {
                        where: {
                            user_id: userId
                        },
                        returning: true
                    }
                )
                .then(([ , [token]]) => token)
            
            return tokenTable
        }

        const tokenTable = await Token.create({
            user_id: userId, 
            refresh: token
        })

        return tokenTable
    }

    remove: ServiceType.Remove = async (token) => {
        await Token.destroy({
            where: {
                refresh: token
            },
            truncate: true
        })
    }

    verify: ServiceType.Verify = (token, type) => {
        try {
            const setting = type === 'REFRESH' ? 'JWT_REFRESH_SECRET_KEY' : 'JWT_ACCESS_SECRET_KEY'
            
            const JWT_SECRET_KEY = config.get<string>(setting)
            const userDTO = jwt.verify(token, JWT_SECRET_KEY)

            if (typeof userDTO === 'string') {
                throw HttpException.Unauthorized()
            }
            
            return userDTO as UserDTO
        } catch (error) {
            throw HttpException.Unauthorized()
        }
    }

    findByToken: ServiceType.FindByToken = async (token) => {
        const tokenTable = await Token.findOne({
            where: {
                refresh: token
            }
        })

        if (tokenTable === null) {
            throw HttpException.Unauthorized()
        }

        return tokenTable
    }
}

export default new Service()