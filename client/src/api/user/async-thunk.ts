import { createAsyncThunk } from '@reduxjs/toolkit'

import AsyncThunk from '../AsyncThunk'
import HandleFetch from './handle-fetch'

class User extends AsyncThunk {
    public readonly getSubscribers = createAsyncThunk(
        this.prefix + '/get-subscribers',
        this.payloadCreator(HandleFetch.GetSubscribers)
    )

    public readonly getSubscriptions = createAsyncThunk(
        this.prefix + '/get-subscriptions',
        this.payloadCreator(HandleFetch.GetSubscriptions)
    )

    public readonly getPreview = createAsyncThunk(
        this.prefix + '/get-preview',
        this.payloadCreator(HandleFetch.GetPreview)
    )

    public readonly subscribe = createAsyncThunk(
        this.prefix + '/subscribe',
        this.payloadCreator(HandleFetch.Subscribe)
    )

    public readonly unsubscribe = createAsyncThunk(
        this.prefix + '/unsubscribe',
        this.payloadCreator(HandleFetch.Unsubscribe)
    )
}

export default new User('user')
