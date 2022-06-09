import React from 'react'

import { P } from '../../../atoms'

const Content: React.FC<Props> = ({ content }) => {
    return (
        <P topic="wrap-anywhere">{content}</P>
    )
}

type Props = {
    content: string
}

export default Content