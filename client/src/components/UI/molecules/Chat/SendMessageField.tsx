import React, { useCallback, useState } from 'react'
import Message from '../../../../api/message/handle-fetch'
import { useAppSelector, useCheck } from '../../../../hooks'
import { currentSelector, userSelector } from '../../../../store/selector'

import { Button, Form } from '../../atoms'
import TextareaAutosize from '../General/TextareaAutosize'

const SendMessageField: React.FC = () => {
    const [content, setContent] = useState('')
    const messageRequest = new Message()
    const chat = useAppSelector(currentSelector).chat
    const user = useAppSelector(userSelector)

    const checkChat = useCheck(chat)
    const checkUser = useCheck(user)

    const handleChange: (React.ChangeEventHandler<HTMLTextAreaElement> & ((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void)) | undefined = useCallback((event) => {
        setContent(event.target.value)
    }, [])

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()

        if (!checkChat.boolean || !checkUser.boolean) {
            return
        }

        messageRequest.add({
            chatId: checkChat.data.id,
            senderId: checkUser.data.id,
            content
        })

        setContent('')
    }

    if (!checkChat.boolean) {
        return <checkChat.element />
    }

    if (!checkUser.boolean) {
        return <checkUser.element />
    }

    return (
        <Form topic="send-message-field">
            <TextareaAutosize 
                topic="main" 
                placeholder="Enter your message"
                value={content} 
                onChange={handleChange} 
            />
            <Button 
                topic="linear" 
                type="submit"
                onClick={handleSubmit}
            >
                Send
            </Button>
        </Form>
    )
}

export default React.memo(SendMessageField)