import React from 'react'

import Converter from '../../../../../services/Converter'
import { P, Header } from '../../../atoms'
import TitleSettings from './TitleSettings'

const PostHeader: React.FC<Props> = ({ time, title, link, setIsUpdated }) => {
    return (
        <Header>
            <TitleSettings link={link} title={title} setIsUpdated={setIsUpdated} />
            <P topic="posts-post-time">{Converter.YYYYMMDDHHMM(time)}</P>
        </Header>
    )
}

type Props = {
    time: number
    title: string
    link: string
    setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>
}

export default PostHeader