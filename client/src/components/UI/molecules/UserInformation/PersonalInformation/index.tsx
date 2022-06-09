import React from 'react'

import { useAppDispatch, useAppSelector, useCheck } from '../../../../../hooks'
import { change } from '../../../../../store/slices/user'
import { Form } from '../../../atoms'
import Fullname from './Fullname'
import ElseInformation from './ElseInformation'
import ButtonLinear from '../../General/Button/Linear'
import Authorization from '../../../../../api/authorization/dispatching'
import { userSelector } from '../../../../../store/selector'

const PersonalInformation: React.FC = () => {
    const dispatch = useAppDispatch()
    const update = Authorization.dispatch.update

    const user = useAppSelector(userSelector)
    const check = useCheck(user)

    if (!check.boolean) {
        return <check.element />
    }

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()

        await update({
            name: check.data.name,
            surname: check.data.surname,
            email: check.data.email,
            login: check.data.login,
            password: check.data.password,
            birthday: check.data.birthday === null ? null : check.data.birthday.toString(),
            privacy: check.data.privacy,
        })
    }

    return (
        <Form  
            onSubmit={handleSubmit}
            onDoubleClick={() => dispatch(change(!check.data.isChanged))}
        >
            <Fullname />
            <ElseInformation />
            {
                check.data.isChanged && (
                    <ButtonLinear
                        type="submit" 
                        onSubmit={handleSubmit}
                    >
                        Update
                    </ButtonLinear>
                )
            }
        </Form>
    )
}

export default PersonalInformation