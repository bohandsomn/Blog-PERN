import type { createAsyncThunk } from '@reduxjs/toolkit'

import Notify from './Notify'
import type Template from '../types/Template'
import { FulfiledTemplate, RejectdTemplate } from '../types/Template'

type GetThunkAPI = Parameters<Parameters<typeof createAsyncThunk>[1]>[1]

type NotifyFulfiledTemplate<D> = Pick<FulfiledTemplate<D>, 'data'> & Pick<FulfiledTemplate<D>['serverMessage'], 'status'> 
type NotifyRejectdTemplate = Pick<RejectdTemplate, 'data'> & Pick<RejectdTemplate['serverMessage'], 'status'> 

type NotifyTemplate<D> = NotifyFulfiledTemplate<D> | NotifyRejectdTemplate

class AsyncThunk {
    public readonly prefix: string

    constructor(prefix: string) {
        this.prefix = prefix
    }

    private readonly notify = (toastId: React.ReactText) => {
        return <T extends Template<T['data']>>(template: T) => {
            const message = template.serverMessage.message
            const status = template.serverMessage.status
    
            if (status === '4' || status === '5') {
                Notify.UpdateToError(toastId, message)
            } else if (status === '2') {
                Notify.UpdateToSuccess(toastId, message)
            } else {
                Notify.UpdateToDefault(toastId, message)
            }

            return {
                data: template.data,
                status
            } as NotifyTemplate<T['data']>
        }
    }

    private readonly verify = (thunkAPI: GetThunkAPI) => {
        return <T extends NotifyTemplate<T['data']>>(template: T) => {
            const isErrorStatusCode = template.status === '4' || template.status === '5'

            if (isErrorStatusCode) {
                return thunkAPI.rejectWithValue(undefined)
            }

            return template.data as Exclude<T['data'], null>
        }
    }

    protected readonly payloadCreator = <Returned, Body = void>(fetcher: (body: Body) => Promise<Template<Returned>>) => {
        return async (body: Body, thunkAPI: GetThunkAPI) => {
            const toastId = Notify.Loading()
            return fetcher(body)
                .then(this.notify(toastId))
                .then(this.verify(thunkAPI))
        } 
    }
}

export default AsyncThunk
