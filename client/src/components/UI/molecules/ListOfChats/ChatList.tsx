import React from 'react'
import Current from '../../../../api/current/dispatching'
import Message from '../../../../api/message/handle-fetch'
import { useAppSelector, useCheck } from '../../../../hooks'
import { chatSelector } from '../../../../store/selector'
import { Li, Ul } from '../../atoms'
import ChatPreview from './ChatPreview'

const ChatList: React.FC = () => {
    const list = useAppSelector(chatSelector).list
    const check = useCheck(list)

    const getOneChat = Current.dispatch.getOneChat
    const messageRequest = new Message()

    const handleClick = async (chatId: number) => {
        await getOneChat(chatId.toString())
        messageRequest.setMany({
            chatId: chatId,
            page: 0
        })
    }

    if (!check.boolean) {
        return <check.element />
    }

    return (
        <Ul topic="chat-list">
            {
                check.data.map((chat) => (
                    <Li 
                        key={chat.id}
                        onClick={() => handleClick(chat.id)}
                    >
                        <ChatPreview {...chat} />
                    </Li>
                ))
            }
        </Ul>
    )
}

export default ChatList