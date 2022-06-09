import React from 'react'
import { Link } from 'react-router-dom'

import Converter from '../../../../../../services/Converter'
import { P, Header, H3 } from '../../../../atoms'
import { USER_WITH_PARAMETER_ROUTE } from '../../../../../pages'

import type { CommentDTO } from '../../../../../../types/comment'

const CommentHeader: React.FC<Props> = ({ time, name, surname, id }) => {
    return (
        <Header topic="comment">
            <Link to={USER_WITH_PARAMETER_ROUTE.replace(/:id/, '') + id}>
                <H3>{name}{' '}{surname}</H3>
                <P>{Converter.YYYYMMDDHHMM(time)}</P>
            </Link>
        </Header>
    )
}

type Props = Pick<CommentDTO, 'time' | 'name' | 'surname' | 'id'>

export default CommentHeader