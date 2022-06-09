import React from 'react'
import { useAppSelector, useCheck } from '../../../../../../hooks'
import { userSelector } from '../../../../../../store/selector'

import { Div } from '../../../../atoms'
import H1s from './H1s'
import Inputs from './Inputs'

const Fullname: React.FC = () => {
    const user = useAppSelector(userSelector)
    const check = useCheck(user)

    if (!check.boolean) {
        return <check.element />
    }

    return (
        <Div topic="user-full-name">
            {
                check.data.isChanged
                    ? <Inputs name={check.data.name} surname={check.data.surname} />
                    : <H1s name={check.data.name} surname={check.data.surname} />
            }
        </Div>
    )
}

export default Fullname