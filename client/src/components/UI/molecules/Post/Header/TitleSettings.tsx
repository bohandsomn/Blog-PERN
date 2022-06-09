import React from 'react'

import { H3, Div } from '../../../atoms'
import Settings from './Settings'

const TitleSettings: React.FC<Props> = ({ title, link, setIsUpdated }) => {
    return (
        <Div topic="posts-post-title-settings">
            <H3>{title}</H3>
            <Settings link={link} setIsUpdated={setIsUpdated} />
        </Div>
    )
}

type Props = {
    title: string
    link: string
    setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>
}

export default TitleSettings