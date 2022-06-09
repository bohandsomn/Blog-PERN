import userService from './service'
import Response from '../../services/Response'

import type { ControllerType } from './type'
import stylesService from './service'
import Variables from '../../services/Styles/Variables'

class Controller {
    get: ControllerType.Get = async (request, response, next) => {
        try {
            const stylesData = stylesService.get()

            const variables = Variables.getAll()

            response.json(new Response('Styles uploaded successful', {...stylesData, variables}))
        } catch (error) {
            next(error)
        }
    }
    
    updateGeneral: ControllerType.UpdateGeneral = async (request, response, next) => {
        try {
            const { newData } = request.body
            const stylesData = stylesService.updateGeneral(newData)

            response.json(new Response('Styles updated successfull', stylesData))
        } catch (error) {
            next(error)
        }
    }
    
    updateDark: ControllerType.UpdateDark = async (request, response, next) => {
        try {
            const { newData } = request.body
            const stylesData = stylesService.updateDark(newData)

            response.json(new Response('Styles updated successfull', stylesData))
        } catch (error) {
            next(error)
        }
    }
    
    updateLight: ControllerType.UpdateLight = async (request, response, next) => {
        try {
            const { newData } = request.body
            const stylesData = stylesService.updateLight(newData)

            response.json(new Response('Styles updated successfull', stylesData))
        } catch (error) {
            next(error)
        }
    }
}

export default new Controller()