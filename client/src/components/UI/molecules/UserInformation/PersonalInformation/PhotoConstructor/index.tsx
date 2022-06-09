import React, { useState } from 'react'

import Photo from '../../../../../../api/photo/dispatching'
import { useAppSelector, useCheck } from '../../../../../../hooks'
import { userSelector, photoSelector } from '../../../../../../store/selector'
import { Img, Div } from '../../../../atoms'
import APIPhoto from '../../../General/APIPhoto'

const PhotoConstructor: React.FC = () => {
    const user = useAppSelector(userSelector)
    const check = useCheck(user)

    const data = useAppSelector(photoSelector).data
    const photoRequest = Photo.dispatch

    const [isOverPhoto, setIsOverPhoto] = useState(false)

    function handleClick<Event extends React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement>>(request: (event?: Event | any) => Promise<boolean>) {
        return (event: Event) => {
            event.preventDefault()
    
            request(event)
        }
    }
    
    if (!check.boolean) {
        return <check.element />
    }
    
    return (
        <Div
            onMouseEnter={() => setIsOverPhoto(true)} 
            onMouseLeave={() => setIsOverPhoto(false)} 
        >
            <Img 
                topic="account-original" 
                src={data?.original} 
            />
            {isOverPhoto && (
                check.data.isChanged 
                    ? (
                        <>
                            {
                                data === null 
                                    ? (
                                        <APIPhoto 
                                            inscription="Set" 
                                            onChange={handleClick(photoRequest.set)}
                                        />
                                    )
                                    : (
                                        <>
                                            <APIPhoto 
                                                inscription="Update" 
                                                onChange={handleClick(photoRequest.update)}
                                            />
                                            <APIPhoto 
                                                type="button" 
                                                inscription="Delete" 
                                                onClick={handleClick(photoRequest.delete)}
                                            />
                                        </>
                                    )
                            }
                        </>
                    )
                    : (
                        <Div topic="account-photo-constructor-wrapper">
                            {
                                data === null 
                                    ? <APIPhoto 
                                        inscription="Set" 
                                        onChange={handleClick(photoRequest.set)}
                                    />
                                    : <APIPhoto 
                                        inscription="Update" 
                                        onChange={handleClick(photoRequest.update)}
                                    />
                            }
                        </Div>
                    )
            )}
        </Div>
    )
}

export default PhotoConstructor
