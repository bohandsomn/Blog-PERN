import React from 'react'

import Converter from '../../../../services/Converter'
import { Div, H3, Img, Li, P } from '../../atoms'
import { useAppSelector, useCheck } from '../../../../hooks'
import { userSelector } from '../../../../store/selector'
import type { MessageDTO } from '../../../../types/message'

const Message: React.FC<Props> = ({ photo, content, time, senderId, name, surname }) => {
    const user = useAppSelector(userSelector)
    const check = useCheck(user)

    if (!check.boolean) {
        return <check.element />
    }

    return (
        <Li topic={ senderId === check.data.id ? "right-message" : "message" }>
            <Img topic="chat-item-message" src={photo || undefined} />
            <Div topic="message">
                <Div>
                    <H3>{name} {surname}</H3>
                    <P>{Converter.YYYYMMDD(time)}</P>
                </Div>
                <P topic="message">{content}</P>
            </Div>
        </Li>
    )
}

type Props = MessageDTO

export default React.memo(Message)