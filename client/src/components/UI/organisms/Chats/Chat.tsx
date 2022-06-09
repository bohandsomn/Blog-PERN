import React, { useCallback, useState } from 'react'
import { useAppSelector, useCheck } from '../../../../hooks'
import { currentSelector } from '../../../../store/selector'

import { Div } from '../../atoms'
import Messages from '../../molecules/Chat/Messages'
import SendMessageField from '../../molecules/Chat/SendMessageField'
import ChatSettings from './ChatSettings'
import Create from './Create'
import HeaderOfChats from './HeaderOfChats'

const Chat: React.FC = () => {
    const [isToggled, setIsToggled] = useState(false)
    const chat = useAppSelector(currentSelector).chat

    const check = useCheck(chat)
    const toggle = useCallback(() => setIsToggled((previous) => !previous), [])

    return (
        <Div topic="chat">
            <HeaderOfChats 
                text={check.boolean ? check.data.name : 'Create chat'}
                onClick={toggle}
            />
            {
                !check.boolean
                    ? <Create />
                    : isToggled 
                        ? <ChatSettings {...check.data} />
                        : (
                            <Div topic="chat-window">
                                <Messages />
                                <SendMessageField />
                            </Div>
                        )
            }
        </Div>
    )
}

export default Chat