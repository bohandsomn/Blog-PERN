import React, { useCallback, useState } from 'react'
import Current from '../../../../api/current/dispatching'
import { privacy } from '../../../../store/slices/current'
import { ChatDTO } from '../../../../types/chat'
import { Div, Form } from '../../atoms'
import ButtonLinear from '../General/Button/Linear'
import InputMain from '../General/Input/Main'
import InputRadio from '../General/Input/Radio'

const Update: React.FC<Props> = ({ id, name }) => {
    const updateChat = Current.dispatch.updateChat

    const [state, setState] = useState({
        name: name,
        privacy: 'PUBLIC' as typeof privacy[number]
    })

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        setState((previous) => ({
            ...previous,
            [event.target.name]: event.target.value
        }))
    }, [])

    const handleSubmit = useCallback((event: React.SyntheticEvent) => {
        event.preventDefault()

        updateChat({
            ...state,
            id
        })
    }, [])

    return (
        <Form topic="update-chat">
            <InputMain 
                name="name"
                value={state.name}
                onChange={handleChange}
                placeholder="New name"
            />
            <Div>
                <InputRadio 
                    header="PRIVACY"
                    strings={privacy}
                    name="privacy"
                    value={state.privacy}
                    onChange={handleChange}
                />
            </Div>
            <ButtonLinear
                onClick={handleSubmit}
            >
                Update
            </ButtonLinear>
        </Form>
    )
}

type Props = ChatDTO

export default React.memo(Update)