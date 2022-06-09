import React from 'react'

import { Label, Div } from '../../atoms'

const LabelWithIcon: React.FC<Props> = ({ after, children, ...props }) => {
    return (
        <Label topic="indented" {...props}>
            <Div topic="label-with-icon-content">
                {children}
            </Div>
            {after}
        </Label>
    )
}

type Props = Omit<JSX.IntrinsicElements['label'], 'ref'> & {
    after: React.ReactNode | JSX.Element
}

export default LabelWithIcon