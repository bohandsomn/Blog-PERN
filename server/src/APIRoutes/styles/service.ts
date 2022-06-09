import Styles from '../../services/Styles'
import Variables from '../../services/Styles/Variables'

import type { ServiceType } from './type'

class Service {
    get: ServiceType.Get = () => {
        return Styles.combine()
    }

    updateGeneral: ServiceType.UpdateGeneral = (updateGeneralRequest) => {
        const theme = Variables.update(updateGeneralRequest, 'general')

        const stylesData = this.get()

        return {
            ...stylesData,
            ...theme
        }
    }

    updateDark: ServiceType.UpdateDark = (updateDarkRequest) => {
        const theme = Variables.update(updateDarkRequest, 'dark')

        const stylesData = this.get()

        return {
            ...stylesData,
            ...theme
        }
    }

    updateLight: ServiceType.UpdateLight = (updateLightRequest) => {
        const theme = Variables.update(updateLightRequest, 'light')

        const stylesData = this.get()

        return {
            ...stylesData,
            ...theme
        }
    }
}

export default new Service()