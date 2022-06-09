import React, { ChangeEventHandler, useState } from 'react'
import Styles from '../../../../api/styles/dispatching'
import { useThrottle } from '../../../../hooks'

import { P } from '../../atoms'
import InputMain from '../General/Input/Main'
import type { IVariables } from '../../../../types/styles'

const ListItem: React.FC<Props> = ({ variable, value, theme }) => {
    const {updateLight, updateDark, updateGeneral} = Styles.dispatch

    const [updateRequest, setUpdateRequest] = useState({ [variable]: value })

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setUpdateRequest({ [variable]: event.target.value })

        throttledUpdateLight({newData: updateRequest})
    }

    const chooseTheme = () => {
        if (theme === 'light') {
            return updateLight
        }

        if (theme === 'dark') {
            return updateDark
        }

        return updateGeneral
    }

    const throttledUpdateLight = useThrottle(chooseTheme(), 500)

    return (
        <>
            <P>{variable}:</P> 
            <InputMain 
                type="color" 
                value={updateRequest[Object.keys(updateRequest)[0]]} 
                onChange={handleChange}
            /> 
        </>
    )
}

type Props = {
    variable: string
    value: string
    theme: keyof IVariables
}

export default ListItem