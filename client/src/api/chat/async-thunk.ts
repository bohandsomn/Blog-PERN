import { createAsyncThunk } from '@reduxjs/toolkit'

import AsyncThunk from '../AsyncThunk'
import HandleFetch from './handle-fetch'

class Chat extends AsyncThunk {
    public readonly create = createAsyncThunk(
        this.prefix + '/create',
        this.payloadCreator(HandleFetch.Create)
    )

    public readonly getMany = createAsyncThunk(
        this.prefix + '/get-many',
        this.payloadCreator(HandleFetch.GetMany)
    )
}

export default new Chat('chat')
