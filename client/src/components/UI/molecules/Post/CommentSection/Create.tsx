import React, { useState } from 'react'

import { Div } from '../../../atoms'
import TextareaAutosize from '../../General/TextareaAutosize'
import Comment from '../../../../../api/comment/dispatching'
import ButtonLinear from '../../General/Button/Linear'

const Create: React.FC<Props> = ({ link }) => {
    const create = Comment.dispatch.create

    const [state, setState] = useState({
        content: '',
        postLink: link
    })

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault()

        create(state)

        setState((previous) => ({
            ...previous,
            content: ''
        }))
    }

    return (
        <Div topic="create-comment">
            <TextareaAutosize 
                topic="main"
                placeholder="Your comment"
                value={state.content}
                onChange={(event) => setState((previousState) => ({...previousState, content: event.target.value}))}
            />
            <ButtonLinear onClick={handleClick}>
                Send
            </ButtonLinear>
        </Div>
    )
}

type Props = {
    link: string
}

export default Create