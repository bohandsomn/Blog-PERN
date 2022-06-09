import React, { useState } from 'react'

import { Div, Button } from '../../../../atoms'
import SettingsModalWindow from './SettingsModalWindow'

const Settings: React.FC<Props> = ({ link, setIsUpdated }) => {
    const [isToggle, setIsToggle] = useState(false)

    return (
        <Div>
            <Button 
                topic="ellipsis"
                onClick={() => setIsToggle(previousIsToggle => !previousIsToggle)}
            >
                &#8942;
            </Button>
            {isToggle && <SettingsModalWindow link={link} setIsUpdated={setIsUpdated} />}
        </Div>
    )
}

type Props = {
    link: string
    setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>
}

export default Settings