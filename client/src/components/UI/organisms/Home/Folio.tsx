import React from 'react'
import Post from '../../../../api/post/dispatching'
import { useAppSelector, useCheck } from '../../../../hooks'
import Pagination from '../../../../services/Pagination'
import { postsSelector } from '../../../../store/selector'
import { Li, Ul } from '../../atoms'

const Folio: React.FC = () => {
    const mainPage = useAppSelector(postsSelector).mainPage
    const addManyMainPage = Post.dispatch.addManyMainPage

    const check = useCheck(mainPage)

    if (!check.boolean) {
        return <check.element />
    }

    const handleClick = () => {
        addManyMainPage({
            userIds: '',
            title: '',
            content: '',
            visibility: 'PUBLIC',
            page: Pagination.getNumberOfPages(check.data).toString()
        })
    }

    return (
        <Ul topic="folio">
            {
                Array
                    .from({
                        length: Pagination.getNumberOfPages(check.data)
                    })
                    .map((_, index) => (
                        <Li key={index}>
                            {index + 1}
                        </Li>
                    ))
            }
            <Li onClick={handleClick}>NEXT</Li>
        </Ul>
    )
}

export default React.memo(Folio)