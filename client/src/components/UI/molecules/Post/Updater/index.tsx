import React, { useState } from 'react'

import { postOptions } from '../../../../../store/slices/posts'
import Post from '../../../../../api/post/dispatching'
import { P, Div, Form } from '../../../atoms'
import InputRadio from '../../General/Input/Radio'
import InputMain from '../../General/Input/Main'
import TextareaAutosize from '../../General/TextareaAutosize'
import ButtonLinear from '../../General/Button/Linear'

import type { PostDTO } from '../../../../../types/post'

const Updater: React.FC<Props> = ({ title, content, link, visibility, setIsUpdated }) => {
    const [state, setState] = useState({ title, content, visibility })

    const update = Post.dispatch.update

    const handleSet = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState((previousState) => ({...previousState, [event.target.name]: event.target.value}))
    }

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()

        const isUpdated = await update({...state, link})

        setIsUpdated(!isUpdated)
    }

    return (
        <Form topic="post-updater-container" onSubmit={handleSubmit}>
            <Div topic="post-updater-fields">
                <InputMain 
                    name="title"
                    value={state.title}
                    onChange={handleSet} 
                />
                <TextareaAutosize
                    topic="main"
                    name="content"
                    value={state.content}
                    onChange={handleSet} 
                 />
                <Div>
                    <InputRadio 
                        header="Post visibility:"
                        strings={postOptions}
                        name="visibility"
                        value={state.visibility}
                        onChange={handleSet}
                    />
                </Div>
            </Div>
            <Div topic="post-updater-button">
                <P 
                    topic="post-updater-button"
                    onClick={() => setIsUpdated((previousIsUpdated) => !previousIsUpdated)}
                >
                    Cancel
                </P>
                <ButtonLinear 
                    type="submit"
                    onClick={handleSubmit}
                >
                    Update
                </ButtonLinear>
            </Div>
        </Form>
    )
}

type Props = { 
    title: PostDTO['title']
    content: PostDTO['content']
    link: PostDTO['link']
    visibility: PostDTO['visibility']
    setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>
}

export default Updater