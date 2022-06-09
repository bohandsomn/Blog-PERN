import React from 'react'

import { Input, Div, Label } from '../../../atoms'

const InputDataList: React.FC<Props> = ({ children, label, list, ...props }) => {
    return (
        <Div>
            <Label>{label}</Label>
            <Input list={list} {...props}/>
            <datalist id={list}>
                {children}
            </datalist>
        </Div>
    )
}

const topic = Input.defaultProps?.topic

type Props = Omit<JSX.IntrinsicElements['input'], 'ref'> & {
    topic?: typeof topic
    children: React.ReactNode
    label: string
}

export default InputDataList