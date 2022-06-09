import userService from './service'
import Response from '../../services/Response'

import type { ControllerType } from './type'

class Controller {
    getSubscribers: ControllerType.GetSubscribers = async (request, response, next) => {
        try {
            const { user } = request.body
    
            const subscribers = await userService.getSubscribers(user.id)
    
            response.json(new Response('Subscribers have been loaded', subscribers))
        } catch (error) {
            next(error)
        }
    }

    getSubscriptions: ControllerType.GetSubscriptions = async (request, response, next) => {
        try {
            const { user } = request.body
    
            const subscriptions = await userService.getSubscriptions(user.id)
    
            response.json(new Response('Subscriptions have been loaded', subscriptions))
        } catch (error) {
            next(error)
        }
    }

    getPreview: ControllerType.GetPreview = async (request, response, next) => {
        try {
            const { fullname } = request.query
    
            const usersPreview = await userService.getPreviewByFullname(fullname)
    
            response.json(new Response('User previews were uploaded successfully', usersPreview))
        } catch (error) {
            next(error)
        }
    }

    getOne: ControllerType.GetOne = async (request, response, next) => {
        try {
            const { subscriberId } = request.params
            const { user } = request.body

            const userDTO = await userService.getOne(user.id, subscriberId)

            response.json(new Response('User were uploaded successfully', userDTO))
        } catch (error) {
            next(error)
        }
    }

    subscribe: ControllerType.Subscribe = async (request, response, next) => {
        try {
            const { user } = request.body
            const { subscriberId } = request.params

            await userService.subscribe(user.id, subscriberId)

            response.json(new Response('Subscribe successful', null))
        } catch (error) {
            next(error)
        }
    }

    unsubscribe: ControllerType.Unsubscribe = async (request, response, next) => {
        try {
            const { user } = request.body
            const { subscriberId } = request.params

            await userService.unsubscribe(user.id, subscriberId)

            response.json(new Response('Subscription successful', null))
        } catch (error) {
            next(error)
        }
    }
}

export default new Controller()