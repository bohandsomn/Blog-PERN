import React from 'react'

import { useAppSelector, useCheck } from '../../../../hooks'
import { Li, Ul } from '../../atoms'
import ListItem from './ListItem'

import type { IVariables } from '../../../../types/styles'
import { stylesSelector } from '../../../../store/selector'

const List: React.FC<Props> = ({ theme }) => {
    const styles = useAppSelector(stylesSelector)
    const check = useCheck(styles)

    if (!check.boolean) {
        return <check.element />
    }

    return (
        <Ul topic="styles-list">
            {
                Object.keys(check.data.variables[theme]).map((key) => {
                    return Object.entries(check.data.variables[theme][key]).map(([variable, value]) => {
                        return (
                            <Li key={variable}>
                                <ListItem variable={variable} value={value} theme={theme} />
                            </Li>
                        )
                    })
                })
            }
        </Ul>
    )
}

type Props = {
    theme: keyof IVariables
}

export default React.memo(List)