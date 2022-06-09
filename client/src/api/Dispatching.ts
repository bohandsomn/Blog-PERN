import type { AsyncThunkAction } from '@reduxjs/toolkit'
import { useCallback } from 'react'

import { useAppDispatch } from '../hooks'

export default class Dispatching {
    protected readonly dispatch = useAppDispatch()

    static get dispatch() {
        return new this()
    }

    protected readonly isDispatched = useCallback(async <Returned, ThunkArg>(asyncThunkAction: AsyncThunkAction<Returned, ThunkArg, {}>): Promise<boolean> => {
        const payloadAction = await this.dispatch(asyncThunkAction)

        if (payloadAction.meta.requestStatus === "fulfilled") {
            return true
        } 
        
        return false
    
    }, [])
}
