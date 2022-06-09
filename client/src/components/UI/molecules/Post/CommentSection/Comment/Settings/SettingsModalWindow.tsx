import React from 'react'

import { useAppSelector } from '../../../../../../../hooks'
import { userSelector } from '../../../../../../../store/selector'
import { Ul, Li } from '../../../../../atoms'
import { Delete, Share, Update } from '../../../../Icons'
import Comment from '../../../../../../../api/comment/dispatching'

import type { CommentDTO } from '../../../../../../../types/comment'

const SettingsModalWindow: React.FC<Props> = ({ commentatorId, link, setIsToggled }) => {
    const user = useAppSelector(userSelector)
    const commentRequest = new Comment()

    if (user.data === null) {
        return <></>
    }

    const isMyPost = commentatorId === user.data.id

    const handleToddle = () => {
        setIsToggled((previousIsToggled) => !previousIsToggled)
    }

    const handleDelete: React.MouseEventHandler<HTMLLIElement> = () => {
        handleToddle()
        commentRequest.delete(link)
    }

    return (
        <Ul topic="account-my-posts-my-post-settings-modal-window">
            {
                isMyPost && (
                    <>
                        <Li onClick={handleDelete}>
                            Delete <Delete />
                        </Li>
                        <Li>
                            Update <Update />
                        </Li>
                    </>
                )
            }
            <Li>Share <Share /></Li>
        </Ul>
    )
}

type Props = {
    commentatorId: CommentDTO['commentatorId']
    link: CommentDTO['link']
    setIsToggled: React.Dispatch<React.SetStateAction<boolean>>
}

export default SettingsModalWindow