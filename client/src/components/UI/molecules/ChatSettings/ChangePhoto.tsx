import React, { useCallback } from 'react'
import Current from '../../../../api/current/dispatching'
import { useAppSelector, useCheck } from '../../../../hooks'
import { currentSelector } from '../../../../store/selector'
import { Div, Img } from '../../atoms'
import APIPhoto from '../General/APIPhoto'

const ChangePhoto: React.FC = () => {
    const chat = useAppSelector(currentSelector).chat
    const check = useCheck(chat)
    const setPhotoChat = Current.dispatch.setPhotoChat

    const handleClick: React.ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        event.preventDefault()
        
        if (!check.boolean) {
            return 
        }

        setPhotoChat({
            chatId: check.data.id.toString(),
            event: event
        })
    }, [])

    if (!check.boolean) {
        return <check.element />
    }

    return (
        <Div topic="change-photo">
            <Img 
                topic="change-photo" 
                src={check.data.photoSource || undefined}
            />
            <APIPhoto 
                inscription="Change photo"
                onChange={handleClick}
            />
        </Div>
    )
}

export default ChangePhoto