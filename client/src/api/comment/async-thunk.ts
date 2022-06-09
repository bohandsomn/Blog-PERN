import { createAsyncThunk } from '@reduxjs/toolkit'

import AsyncThunk from '../AsyncThunk'
import HandleFetch from './handle-fetch'

class Comment extends AsyncThunk {
    public readonly create = createAsyncThunk(
        this.prefix + '/create',
        this.payloadCreator(HandleFetch.Create)
    )

    public readonly update = createAsyncThunk(
        this.prefix + '/update',
        this.payloadCreator(HandleFetch.Update)
    )

    public readonly delete = createAsyncThunk(
        this.prefix + '/delete',
        this.payloadCreator(HandleFetch.Delete)
    )

    public readonly like = createAsyncThunk(
        this.prefix + '/like',
        this.payloadCreator(HandleFetch.Like)
    )

    public readonly dislike = createAsyncThunk(
        this.prefix + '/dislike',
        this.payloadCreator(HandleFetch.Dislike)
    )
}

export default new Comment('comment')
