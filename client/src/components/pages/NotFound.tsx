import React from 'react'

import { Section, Div } from '../UI/atoms'
import Description from '../UI/organisms/NotFound/Description'
import NotFoundHeader from '../UI/organisms/NotFound/Header'

const NotFound: React.FC = () => {
    return (
        <Section topic="container">
            <Div topic="not-found-container">
                <NotFoundHeader />
                <Description />
            </Div>
        </Section>
    )
}

export default React.memo(NotFound)