import { StylesData, StylesDataWithVariables, Theme } from '../../types/entities/styles'
import type CreateResponseUtility from '../../types/Utility/CreateResponse'

namespace Response {
    export type Get = CreateResponseUtility<StylesDataWithVariables>
    export type UpdateGeneral = CreateResponseUtility<StylesData & Theme<'general'>>
    export type UpdateDark = CreateResponseUtility<StylesData & Theme<'dark'>>
    export type UpdateLight = CreateResponseUtility<StylesData & Theme<'light'>>
}

export default Response
