import React from 'react'

import { Form, H1 } from '../../../atoms'
import Create from './Create'
import Fields from './Fields'
import Visibility from './Visibility'

const PostCreator: React.FC = () => {
    return (
        <Form topic="post-creator-container">
            <H1 topic="post-creator-header">Post Creator</H1>
            <Fields />
            <Visibility />
            <Create />
        </Form>
    )
}

export default React.memo(PostCreator)