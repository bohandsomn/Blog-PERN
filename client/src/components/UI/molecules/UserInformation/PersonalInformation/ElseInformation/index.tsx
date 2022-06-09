import React from 'react'

import Converter from '../../../../../../services/Converter'
import { useAppDispatch, useAppSelector, useCheck } from '../../../../../../hooks'
import { changeField, privacyOptions } from '../../../../../../store/slices/user'
import { Ul, Li } from '../../../../atoms'
import InputRadio from '../../../General/Input/Radio'
import Item from './Item'
import { userSelector } from '../../../../../../store/selector'

const ElseInformation: React.FC = () => {
    const dispatch = useAppDispatch()

    const user = useAppSelector(userSelector)
    const check = useCheck(user)

    if (!check.boolean) {
        return <check.element />
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "birthday") {
            dispatch(changeField({[event.target.name]: Converter.YYYYMMDD(event.target.value)}))
            return
        }

        dispatch(changeField({[event.target.name]: event.target.value}))
    }

    return (
        <Ul topic="else-information">
            <Li>
                <Item 
                    isChanged={check.data.isChanged}
                    personalInformation="Email:" 
                    name="email"
                    value={check.data.email} 
                    onChange={handleChange}
                />
            </Li>
            <Li>
                <Item 
                    isChanged={check.data.isChanged}
                    personalInformation="Login:" 
                    name="login"
                    value={check.data.login} 
                    onChange={handleChange}
                />
            </Li>
            <Li>
                <Item 
                    isChanged={check.data.isChanged}
                    personalInformation="Date of birth:" 
                    type="date"
                    name="birthday"
                    value={Converter.YYYYMMDD(check.data.birthday === null ? Date.now() : check.data.birthday)} 
                    onChange={handleChange}
                />
            </Li>
            {
                check.data.isChanged && (
                    <>
                        <Li>
                            <InputRadio 
                                header="Privacy:" 
                                strings={privacyOptions}
                                topic="plain"
                                name="privacy" 
                                value={check.data.privacy || ''}
                                onChange={handleChange}
                            />
                        </Li>
                        <Li>
                            <Item 
                                isChanged={check.data.isChanged}
                                personalInformation="New password:" 
                                type="password"
                                name="password"
                                value={check.data.password} 
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </Li>
                    </>
                )
            }
        </Ul>
    )
}

export default ElseInformation