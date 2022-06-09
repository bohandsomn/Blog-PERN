import React from 'react'
import { Img, P } from '../../atoms'
import type { ChatDTO } from '../../../../types/chat'

const ChatItem: React.FC<Props> = ({ photoSource, name }) => {
    return (
        <>
            <Img topic="user-item-preview" src={photoSource || undefined} />
            <P>{name}</P>
        </>
    )
}

type Props = ChatDTO

export default ChatItem