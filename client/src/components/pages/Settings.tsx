import React from 'react'

import { Section } from '../UI/atoms'
import StylesVariable from '../UI/organisms/Settings/StylesVariable'

const Settings: React.FC = () => {
    return (
        <Section topic="container">
            <StylesVariable />
        </Section>
    )
}

export default React.memo(Settings)
