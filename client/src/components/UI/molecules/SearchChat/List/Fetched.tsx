import React, { useState } from 'react'
import Current from '../../../../../api/current/dispatching'
import { useAppDispatch, useAppSelector, useDebounce } from '../../../../../hooks'
import { currentSelector } from '../../../../../store/selector'
import { clearUser, selectChat } from '../../../../../store/slices/current'
import { Li } from '../../../atoms'
import ChatItem from '../../General/ChatItem'
import InputWithList from '../../General/Input/WithList'

const Fetched: React.FC = () => {
    const dispatch = useAppDispatch()

    const getManyByNameChat = Current.dispatch.getManyByNameChat

    const chats = useAppSelector(currentSelector).chats
    const [fullname, setFullname] = useState('')

    const debouncedGetManyByNameChatRequest = useDebounce(getManyByNameChat, 800)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullname(event.target.value)
        debouncedGetManyByNameChatRequest(event.target.value)
    }

    const handleClick: React.MouseEventHandler<HTMLLIElement> = () => {
        setFullname('')
        dispatch(clearUser())
    }

    return (
        <InputWithList
            topic="main"
            placeholder="User"
            value={fullname}
            onChange={handleChange}
        >
            {
                chats.fetched.map((chat) => (
                    <Li 
                        key={chat.id}
                        onClick={(event) => {
                            dispatch(selectChat(chat))
                            handleClick(event)
                        }}
                    >
                        <ChatItem {...chat} />
                    </Li>
                ))
            }
        </InputWithList>
    )
}

export default React.memo(Fetched)