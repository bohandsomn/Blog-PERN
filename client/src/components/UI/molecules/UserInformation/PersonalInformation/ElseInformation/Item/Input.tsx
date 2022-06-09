import React from 'react'

import { Input } from '../../../../../atoms'

const InputItem: React.FC<Props> = ({ value, ...props }) => {
    return (
        <Input 
            topic="plain"
            value={value} 
            {...props}
        />
    )
}

type Props = Omit<JSX.IntrinsicElements['input'], 'ref'> & {
    value: string
}

export default InputItem