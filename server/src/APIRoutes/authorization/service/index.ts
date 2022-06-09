import bcrypt from 'bcrypt'
import config from 'config'
import { v4 } from 'uuid'
import { Op } from 'sequelize'

import { User } from '../../../database/models'
import UserDTO from '../../../DTOs/user'
import HttpException from '../../../Exception/Http'
import tokenService from './token'
import chatService from '../../chat/service'
import activationService from './activation'
import mailService from './mail'

import type { ServiceType } from '../type'

class Service {
    registration: ServiceType.Registration = async ({ name, email, login, password, privacy }) => {
        const isExists = await User
            .findAll({
                where: {
                    [Op.or]: {
                        email, 
                        login
                    }
                }
            })
            .then((users) => users.length !== 0)

        if (isExists) {
            throw HttpException.Conflict('User with same email or login already exists')
        }

        const hashPassword = await bcrypt.hash(password, 4)
        
        const user = await User.create({
            name, 
            email, 
            login, 
            password: hashPassword, 
            privacy
        })

        await chatService.create({
            userId: user.id,
            name: user.name,
            privacy: 'PRIVATE'
        })

        const activationLink = v4()
        const activation = await activationService.set({
            userId: user.id, 
            link: activationLink, 
            isActivation: false
        })

        const API_URL = config.get<string>('API_URL')

        await mailService.sendActivationMail(user.email, `${API_URL}/api/authorization/activation/${activation.link}`)

        const userDTO = new UserDTO({
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            login: user.login,
            isActivation: activation.is_activation,
            birthday: user.birthday === null ? null : parseInt(user.birthday),
            privacy: user.privacy
        })

        const tokens = tokenService.generateTokens({...userDTO})

        await tokenService.saveToken(user.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDTO
        }
    }

    login: ServiceType.Login = async ({ email, password }) => {
        const user = await User.findOne({ 
            where: { 
                email 
            } 
        })

        if (user === null) {
            throw HttpException.Conflict(`User with this email: ${email} does not exist`)
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if (!isValidPassword) {
            throw HttpException.Forbidden(`Invalid password`)
        }

        const activation = await activationService.getById(user.id)

        console.log(activation.link)

        const userDTO = new UserDTO({
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email, 
            login: user.login,
            isActivation: activation.is_activation,
            birthday: user.birthday === null ? null : parseInt(user.birthday),
            privacy: user.privacy
        })

        const tokens = tokenService.generateTokens({...userDTO})

        return {
            ...tokens,
            user: userDTO
        }
    }

    update: ServiceType.Update = async ({ name, surname, email, login, password, birthday, privacy, user }) => {
        const users = await User.findAll({
            where: {
                email,
                login
            }
        })

        for (const userFromDB of users) {
            if (userFromDB.id !== user.id) {
                throw HttpException.Conflict('User with same email or login already exists')
            }
        }

        const hashPassword = await bcrypt.hash(password, 4)

        await User.update({
            name, 
            surname, 
            email, 
            login, 
            password: hashPassword, 
            birthday, 
            privacy, 
        }, {
            where: {
                login: user.login, 
                email: user.email
            }
        })

        const userFromDB = await User.findByPk(user.id) as User

        const activation = await activationService.getById(userFromDB.id)

        const userDTO = new UserDTO({
            id: userFromDB.id,
            name: userFromDB.name,
            surname: userFromDB.surname,
            email: userFromDB.email, 
            login: userFromDB.login,
            isActivation: activation.is_activation,
            birthday: userFromDB.birthday === null ? null : parseInt(userFromDB.birthday),
            privacy: userFromDB.privacy
        })
    
        const tokens = tokenService.generateTokens({...userDTO})
    
        return {
            ...tokens,
            user: userDTO
        }
    }

    autoLogin: ServiceType.AutoLogin = async (userId) => {
        const user = await User.findOne({
            where: {
                id: userId
            }
        })

        if (user === null) {
            throw HttpException.Unauthorized()
        }

        const activation = await activationService.getById(user.id)

        const userDTO = new UserDTO({
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email, 
            login: user.login,
            isActivation: activation.is_activation,
            birthday: user.birthday === null ? null : parseInt(user.birthday),
            privacy: user.privacy
        })

        const tokens = tokenService.generateTokens({...userDTO})

        return {
            ...tokens,
            user: userDTO
        }
    }

    logout: ServiceType.Logout = async (refreshToken) => {
        if (refreshToken === undefined) {            
            throw HttpException.Unauthorized()
        }

        await tokenService.remove(refreshToken)
    }

    activation: ServiceType.Activation = async (link) => {
        await activationService.activation(link)
    }

    refresh: ServiceType.Refresh = async (refreshToken) => {
        if (refreshToken === undefined) {
            throw HttpException.Unauthorized()
        }

        const oldUserDTO = tokenService.verify(refreshToken, 'REFRESH')

        const user = await User.findOne({
            where: {
                id: oldUserDTO.id
            }
        })

        if (user === null) {
            throw HttpException.Unauthorized()
        }

        const activation = await activationService.getById(user.id)

        const userDTO = new UserDTO({
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email, 
            login: user.login,
            isActivation: activation.is_activation,
            birthday: user.birthday === null ? null : parseInt(user.birthday),
            privacy: user.privacy
        })
        
        const tokens = tokenService.generateTokens({...userDTO})

        await tokenService.saveToken(user.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDTO
        }
    }
}

export default new Service()