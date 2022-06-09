import React from 'react'

import { Div, H1 } from '../../atoms'
import List from '../../molecules/StylesVariable/List'

const StylesVariable: React.FC = () => {
    return (
        <>
            <Div>
                <H1>Light styles</H1>
                <List theme="light" />
            </Div>
            <Div>
                <H1>Dark styles</H1>
                <List theme="dark" />
            </Div>
        </>
    )
}

export default StylesVariable