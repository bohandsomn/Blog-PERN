import React from 'react'

import { Form } from '../../atoms'
import SearchButton from '../../molecules/SearchPost/Button'
import Fields from '../../molecules/SearchPost/Fields'

const SearchPost: React.FC = () => {
    return (
        <Form topic="search-post-container">
            <Fields />
            <SearchButton />
        </Form>
    )
}

export default React.memo(SearchPost)