import React from 'react'

import { Input, Div, Ul } from '../../../atoms'

const InputWithList: React.FC<Props> = ({ children, ...props }) => {
    return (
        <Div>
            <Input {...props} />
            {
                (children as Array<any>).length !== 0 && (
                    <Ul topic="input-with-list">
                        {children}
                    </Ul>
                )
            }
        </Div>
    )
}

const topic = Input.defaultProps?.topic

type Props = Omit<JSX.IntrinsicElements['input'], 'ref'> & {
    topic?: typeof topic
    children: React.ReactNode
}

export default InputWithList