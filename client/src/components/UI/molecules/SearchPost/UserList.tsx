import React, { MouseEventHandler, useState } from 'react'
import User from '../../../../api/user/dispatching'

import { useAppDispatch, useAppSelector, useDebounce } from '../../../../hooks'
import { searchPostsSelector } from '../../../../store/selector'
import { addUser, removeUser, setFetched } from '../../../../store/slices/searchPosts'
import { Ul, Li } from '../../atoms'
import InputWithList from '../General/Input/WithList'
import UserItem from '../General/UserItem'

const UserList: React.FC = () => {
    const dispatch = useAppDispatch()
    
    const fetchedUsers = useAppSelector(searchPostsSelector).fetched
    const selectedUsers = useAppSelector(searchPostsSelector).selected
    const getPreview = User.dispatch.getPreview

    const [fullname, setFullname] = useState('')

    const debouncedUserRequest = useDebounce(getPreview, 800)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullname(event.target.value)
        debouncedUserRequest({ fullname: event.target.value })
    }

    const handleClick: MouseEventHandler<HTMLLIElement> = () => {
        setFullname('')
        dispatch(setFetched([]))
    }

    return (
        <>
            <InputWithList
                topic="main"
                placeholder="User"
                value={fullname}
                onChange={handleChange}
            >
                {
                    fetchedUsers.map((user) => (
                        <Li 
                            key={user.id}
                            onClick={(event) => {
                                dispatch(addUser(user))
                                handleClick(event)
                            }}
                        >
                            <UserItem {...user} />
                        </Li>
                    ))
                }
            </InputWithList>
            <Ul topic="main">
                {
                    selectedUsers.map((user) => (
                        <Li 
                            key={user.id}
                            onClick={() => dispatch(removeUser(user))}
                        >
                            <UserItem {...user} />
                        </Li>
                    ))
                }
            </Ul>
        </>
    )
}

export default React.memo(UserList)