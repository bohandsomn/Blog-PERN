import React from 'react'
import { Div, Section } from '../UI/atoms'
import Chat from '../UI/organisms/Chats/Chat'
import ListOfChats from '../UI/organisms/Chats/ListOfChats'

const Chats: React.FC = () => {
    return (
        <Section topic="container">
            <Div topic="chats">
                <ListOfChats />
                <Chat />
            </Div>
        </Section>
    )
}

export default React.memo(Chats)