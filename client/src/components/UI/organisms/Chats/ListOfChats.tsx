import React, { useCallback, useState } from 'react'
import { useAppSelector, useCheck } from '../../../../hooks'
import { userSelector } from '../../../../store/selector'
import { Div } from '../../atoms'
import ChatList from '../../molecules/ListOfChats/ChatList'
import SearchChat from '../../molecules/SearchChat'
import HeaderOfChats from './HeaderOfChats'

const ListOfChats: React.FC = () => {
    const [isToggled, setIsToggled] = useState(false)
    const user = useAppSelector(userSelector)
    const check = useCheck(user)

    const toggle = useCallback(() => setIsToggled((previous) => !previous), [])

    if (!check.boolean) {
        return <check.element />
    }

    return (
        <Div topic="list-of-users">
            <HeaderOfChats 
                text={`${check.data.name} ${check.data.surname || ''}`} 
                onClick={toggle}
            />
            {
                isToggled 
                    ? <SearchChat />
                    : <ChatList />
            }
        </Div>
    )
}

export default ListOfChats