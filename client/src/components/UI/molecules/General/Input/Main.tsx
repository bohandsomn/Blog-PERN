import React from 'react'

import { Input } from '../../../atoms'

const InputMain: React.FC<Props> = ({ ...props }) => {
    return (
        <Input topic="main" {...props} />
    )
}

type Props = typeof Input.defaultProps

export default React.memo(InputMain)