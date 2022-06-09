import React, { useState } from 'react'

import { Div, Button } from '../../../../../atoms'
import SettingsModalWindow from './SettingsModalWindow'

import type { CommentDTO } from '../../../../../../../types/comment'

const Settings: React.FC<Props> = ({ commentatorId, link }) => {
    const [isToggled, setIsToggled] = useState(false)

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setIsToggled((previousIsToggled) => !previousIsToggled)
    }

    return (
        <Div>
            <Button 
                topic="ellipsis"
                onClick={handleClick}
            >
                &#8942;
            </Button>
            {isToggled && (
                <SettingsModalWindow 
                    commentatorId={commentatorId} 
                    link={link}
                    setIsToggled={setIsToggled} 
                />
            )}
        </Div>
    )
}

type Props = {
    commentatorId: CommentDTO['commentatorId']
    link: CommentDTO['link']
}

export default Settings