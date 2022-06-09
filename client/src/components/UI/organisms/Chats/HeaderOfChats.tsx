import React from 'react'
import { Header } from '../../atoms'

const HeaderOfChats: React.FC<Props> = ({ text, ...props }) => {
    return (
        <Header topic="chats" {...props}>
            {text}
        </Header>
    )
}

type Props = typeof Header.defaultProps & {
    text: string
}

export default React.memo(HeaderOfChats)