import React, { useState } from 'react'
import Chat from '../../../../api/chat/dispatching'
import Request from '../../../../api/chat/request'

import { chatOptions } from '../../../../store/slices/chat'
import { Button, Div, Form } from '../../atoms'
import InputMain from '../../molecules/General/Input/Main'
import InputRadio from '../../molecules/General/Input/Radio'

const Create: React.FC = () => {
    const [state, setState] = useState<Request.Create>({
        name: '',
        privacy: 'PUBLIC'
    })

    const create = Chat.dispatch.create

    const handleSetField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState((previous) => ({
            ...previous,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()

        const isCreate = await create(state)

        if (isCreate) {
            setState({
                name: '',
                privacy: 'PUBLIC'
            })
        }
    }

    return (
        <Form topic="create-chat">
            <InputMain 
                name="name"
                value={state.name}
                onChange={handleSetField}
            />
            <Div>
                <InputRadio 
                    name="privacy"
                    header="Privacy"
                    value={state.privacy}
                    onChange={handleSetField}
                    strings={chatOptions}    
                />
            </Div>
            <Button topic="linear" onClick={handleSubmit}>
                Create
            </Button>
        </Form>
    )
}

export default Create
