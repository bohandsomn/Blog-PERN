import React from 'react'

import { Input, Span, Label, Div } from '../../atoms'

const Toggle: React.FC<Props> = ({ id, ...props }) => {
    return (
        <Div topic="toggle" {...props}>
            <Input id={id} type="checkbox" />
            <Label htmlFor={id}>
                <Span></Span>
            </Label>
        </Div>
    )
}

type Props = Omit<JSX.IntrinsicElements['div'], 'ref'>

export default React.memo(Toggle)