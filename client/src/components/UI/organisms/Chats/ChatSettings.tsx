import React from 'react'
import { ChatDTO } from '../../../../types/chat'
import { Div } from '../../atoms'
import ChangePhoto from '../../molecules/ChatSettings/ChangePhoto'
import Delete from '../../molecules/ChatSettings/Delete'
import Update from '../../molecules/ChatSettings/Update'

const ChatSettings: React.FC<Props> = (props) => {
    return (
        <Div topic="chat-settings">
            <ChangePhoto />
            <Update {...props} />
            <Delete {...props} />
        </Div>
    )
}

type Props = ChatDTO

export default ChatSettings