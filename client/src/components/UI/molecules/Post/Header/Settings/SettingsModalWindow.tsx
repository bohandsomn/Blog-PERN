import React from 'react'

import { useAppSelector, useCheck } from '../../../../../../hooks'
import { postsSelector } from '../../../../../../store/selector'
import Post from '../../../../../../api/post/dispatching'
import { Ul, Li } from '../../../../atoms'
import { Delete, Share, Update } from '../../../Icons'
import { Link } from 'react-router-dom'
import { POST_WITH_PARAMETER_ROUTE } from '../../../../../pages'

const SettingsModalWindow: React.FC<Props> = ({ link, setIsUpdated }) => {
    const postRequest = new Post()
    const accountPage = useAppSelector(postsSelector).accountPage

    const check = useCheck(accountPage)

    if (!check.boolean) {
        return <check.element />
    }

    const isMyPost = check.data.some((postDTO) => postDTO.link === link)

    return (
        <Ul topic="account-my-posts-my-post-settings-modal-window">
            {
                isMyPost && (
                    <>
                        <Li onClick={() => postRequest.delete(link)}>
                            Delete <Delete />
                        </Li>
                        <Li onClick={() => setIsUpdated((previousIsUpdated) => !previousIsUpdated)}>
                            Update <Update />
                        </Li>
                    </>
                )
            }
            <Li>
                <Link to={POST_WITH_PARAMETER_ROUTE.replace(/:link/, '') + link}>
                    Share 
                </Link>
                <Share />
            </Li>
        </Ul>
    )
}

type Props = {
    link: string
    setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>
}

export default SettingsModalWindow