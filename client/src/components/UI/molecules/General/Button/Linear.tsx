import React from 'react'

import { Button } from '../../../atoms'

const ButtonLinear: React.FC<Props> = ({ ...props }) => {
    return (
        <Button topic="linear" {...props} />
    )
}

type Props = typeof Button.defaultProps

export default React.memo(ButtonLinear)