import React from 'react'

import { P } from '../../../../../atoms'
import H3Item from './H3'
import InputItem from './Input'

const Item: React.FC<Props> = ({ personalInformation, value, isChanged, ...props }) => {
    return (
        <>
            <P topic="account-personal-information">{personalInformation}&nbsp;</P>
            {
                isChanged 
                    ? <InputItem value={value} {...props} />
                    : <H3Item>{value}</H3Item>
            }
        </>
    )
}

type Props = Omit<JSX.IntrinsicElements['input'], 'ref'> & {
    isChanged: boolean
    personalInformation: string
    value: string
}

export default Item