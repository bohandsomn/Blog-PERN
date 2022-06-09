import React from 'react'

import { Div } from '../../atoms'
import Selected from './List/Selected'
import Fetched from './List/Fetched'

const SearchChat: React.FC = () => {
    return (
        <Div topic="search-user">
            <Fetched />
            <Selected />
        </Div>
    )
}

export default SearchChat