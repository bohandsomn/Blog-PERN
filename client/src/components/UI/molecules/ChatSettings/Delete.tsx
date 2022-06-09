import React, { useCallback } from 'react'
import Current from '../../../../api/current/dispatching'
import { ChatDTO } from '../../../../types/chat'
import ButtonPlain from '../General/Button/Plain'

const Delete: React.FC<Props> = ({ link }) => {
    const deleteChat = Current.dispatch.deleteChat

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
        event.preventDefault()
        
        deleteChat(link)
    }, [])

    return (
        <ButtonPlain onClick={handleClick}>
            Delete
        </ButtonPlain>
    )
}

type Props = ChatDTO

export default React.memo(Delete)