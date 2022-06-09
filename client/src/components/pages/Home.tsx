import React from 'react'

import { Section } from '../UI/atoms'
import Folio from '../UI/organisms/Home/Folio'
import Posts from '../UI/organisms/Home/Posts'
import SearchPost from '../UI/organisms/Home/SearchPost'

const Home: React.FC = () => {
    return (
        <Section topic="container">
            <SearchPost />
            <Posts />
            <Folio />
        </Section>
    )
}

export default React.memo(Home)