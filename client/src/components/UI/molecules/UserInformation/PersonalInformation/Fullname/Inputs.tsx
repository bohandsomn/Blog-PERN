import React from 'react'

import { useAppDispatch } from '../../../../../../hooks'
import { changeField } from '../../../../../../store/slices/user'
import { Input } from '../../../../atoms'
import type { UserDTO } from '../../../../../../types/user'

const Inputs: React.FC<Props> = ({ name, surname }) => {
    const dispatch = useAppDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeField({[event.target.name]: event.target.value}))
    }

    return (
        <>
            <Input 
                topic="heading24" 
                name="name"
                placeholder="Name"
                value={name} 
                onChange={handleChange}
            />
            <Input 
                topic="heading24" 
                name="surname"
                placeholder="Surname"
                value={surname || ''} 
                onChange={handleChange}
            />
        </>
    )
}

type Props = {
    name: UserDTO['name']
    surname: UserDTO['surname']
}

export default Inputs