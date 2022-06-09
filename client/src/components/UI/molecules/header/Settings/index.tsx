import React, { useState } from 'react'
import { Nav } from '../../../atoms'

import { Settings } from '../../../molecules/Icons'
import PullDownMenu from './PullDownMenu'

const HeaderSettings: React.FC = () => {
    const [isToggle, setIsToggle] = useState(false)

    return (
        <Nav>
            <Settings width={30} height={30} onClick={() => setIsToggle((previousIsToggle) => !previousIsToggle)} />
            {isToggle && <PullDownMenu setIsToggle={setIsToggle}/>}
        </Nav>
    )
}

export default HeaderSettings