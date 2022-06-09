import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { searchPostsSelector } from '../../../../store/selector'
import { changeSearchQuery } from '../../../../store/slices/searchPosts'
import { H1, Div } from '../../atoms'
import InputMain from '../General/Input/Main'
import UserList from './UserList'

const Fields: React.FC = () => {
    const dispatch = useAppDispatch()
    const query = useAppSelector(searchPostsSelector).query

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            changeSearchQuery({
                [event.target.name]: event.target.value
            })
        )
    }

    return (
        <Div topic="search-panel-fields">
            <H1 topic="heading24">Search by</H1>
            <InputMain 
                placeholder="title" 
                name="title"
                value={query.title} 
                onChange={handleChange}
            />
            <InputMain 
                placeholder="post content" 
                name="content"
                value={query.content} 
                onChange={handleChange}
            />
            <UserList />
        </Div>
    )
}

export default React.memo(Fields)