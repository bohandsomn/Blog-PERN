import React from 'react'
import { ChatDTO } from '../../../../types/chat'
import { Div, H3, Img, P } from '../../atoms'

const ChatPreview: React.FC<Props> = ({ name, photoSource, lastMessage }) => {
    return (
        <>
            <Img 
                topic="chat-item-preview" 
                src={photoSource || undefined}
            />
            <Div>
                <H3>{name}</H3>
                <P topic="ellipsis">{lastMessage?.content}</P>
            </Div>
        </>
    )
}

type Props = ChatDTO

export default ChatPreview