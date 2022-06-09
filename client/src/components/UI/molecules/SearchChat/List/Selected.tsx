import React from 'react'

import { useAppSelector } from '../../../../../hooks'
import { Li, Ul } from '../../../atoms'
import ChatItem from '../../General/ChatItem'

import Current from '../../../../../api/current/dispatching'
import Message from '../../../../../api/message/handle-fetch'
import { currentSelector } from '../../../../../store/selector'

const Selected: React.FC = () => {
    const getOneChat = Current.dispatch.getOneChat
    const messageRequest = new Message()
    
    const chats = useAppSelector(currentSelector).chats

    return (
        <Ul topic="main">
            {
                chats.selected.map((chat) => (
                    <Li 
                        key={chat.id}
                        onClick={() => {
                            getOneChat(chat.id.toString())
                            messageRequest.setMany({
                                chatId: chat.id,
                                page: 0
                            })
                        }}
                    >
                        <ChatItem {...chat} />
                    </Li>
                ))
            }
        </Ul>
    )
}

export default React.memo(Selected)