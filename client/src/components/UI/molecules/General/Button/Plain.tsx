import React from 'react'

import { Button } from '../../../atoms'

const ButtonPlain: React.FC<Props> = ({ ...props }) => {
    return (
        <Button topic="plain" {...props} />
    )
}

type Props = typeof Button.defaultProps

export default React.memo(ButtonPlain)