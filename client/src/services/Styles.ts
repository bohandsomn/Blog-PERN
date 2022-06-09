import type { IVariables, StylesData } from '../types/styles'

class Styles {
    public static setVariables = (styles: StylesData, variables: Partial<IVariables>): void => {
        styles.div.app = {
            ...styles.div.app,
            ...variables.dark,
            ...variables.light,
            ...variables.general,
        }
    }
}

export default Styles
