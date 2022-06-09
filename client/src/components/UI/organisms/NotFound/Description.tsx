import React from 'react'
import { Link } from 'react-router-dom'

import { HOME_ROUTE } from '../../../pages'
import { P } from '../../atoms'

const Description: React.FC = () => {
    return (
        <P topic="not-found-description">
            Page not found. <Link to={HOME_ROUTE}>Back to the main page</Link>
        </P>
    )
}

export default Description