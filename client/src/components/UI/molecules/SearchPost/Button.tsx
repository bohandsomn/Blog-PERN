import React from 'react'

import Post from '../../../../api/post/dispatching'
import { useAppSelector } from '../../../../hooks'
import { searchPostsSelector } from '../../../../store/selector'
import ButtonLinear from '../General/Button/Linear'

const SearchButton: React.FC = () => {
    const getManyMainPage = Post.dispatch.getManyMainPage
    const query = useAppSelector(searchPostsSelector).query

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()

        getManyMainPage(query)
    }

    return (
        <ButtonLinear 
            type="submit"
            onClick={handleSubmit}
        >
            Search
        </ButtonLinear>
    )
}

export default SearchButton