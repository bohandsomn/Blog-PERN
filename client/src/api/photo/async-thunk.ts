import { createAsyncThunk } from '@reduxjs/toolkit'

import AsyncThunk from '../AsyncThunk'
import HandleFetch from './handle-fetch'

class Photo extends AsyncThunk {
    public readonly getOne = createAsyncThunk(
        this.prefix + '/get-one',
        this.payloadCreator(HandleFetch.GetOne)
    )

    public readonly set = createAsyncThunk(
        this.prefix + '/set',
        this.payloadCreator(HandleFetch.Set)
    )

    public readonly update = createAsyncThunk(
        this.prefix + '/update',
        this.payloadCreator(HandleFetch.Update)
    )

    public readonly delete = createAsyncThunk(
        this.prefix + '/delete',
        this.payloadCreator(HandleFetch.Delete)
    )
}

export default new Photo('photo')
