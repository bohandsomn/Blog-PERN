import React from 'react'
import { useAppSelector } from '../../../../hooks'
import { currentSelector } from '../../../../store/selector'

import { Ul } from '../../atoms'
import Message from './Message'

const Messages: React.FC = () => {
    const messages = useAppSelector(currentSelector).messages
    
    return (
        <Ul topic="messages">
            {
                messages.map((message) => (
                    <Message 
                        key={message.id} 
                        {...message} 
                    />
                ))
            }
        </Ul>
    )
}

export default React.memo(Messages)