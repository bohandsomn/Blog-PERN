import React from 'react'
import { Input, Label, P } from '../../atoms'
import FIELD_NAME from '../UserInformation/PersonalInformation/PhotoConstructor/FIELD_NAME'

const APIPhoto: React.FC<Props> = ({ inscription, ...props }) => {
    return (
        <Label>
            <P topic="account-photo-constructor">
                {
                    inscription
                }
            </P>
            <Input 
                type="file"
                name={FIELD_NAME}
                hidden
                {...props}
            />
        </Label>
    )
}

type Props = typeof Input.defaultProps & {
    inscription: string
}

export default APIPhoto