import React from 'react'

import { Input, Label, P } from '../../../atoms'

const InputRadio: React.FC<Props> = ({ header, strings, value, topic, ...props }) => {
    return (
        <>
            <P topic="account-personal-information">{header}&nbsp;</P>
            {
                strings.map((string) => (
                    <Label topic="account-personal-information" key={string}>
                        <Input 
                            type="radio" 
                            topic={topic}
                            value={string} 
                            checked={value === string}
                            {...props}
                        />
                        <P topic="account-personal-information">{string}</P>
                    </Label>
                ))
            }
        </>
    )
}

const topic = Input.defaultProps?.topic

type Props = Omit<JSX.IntrinsicElements['input'], 'ref'> & {
    header: string
    strings: string[]
    topic?: typeof topic
}

export default React.memo(InputRadio)