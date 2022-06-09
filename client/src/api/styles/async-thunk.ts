import { createAsyncThunk } from '@reduxjs/toolkit'

import AsyncThunk from '../AsyncThunk'
import HandleFetch from './handle-fetch'

class Styles extends AsyncThunk {
    public readonly get = createAsyncThunk(
        this.prefix + '/get',
        this.payloadCreator(HandleFetch.Get)
    )

    public readonly updateGeneral = createAsyncThunk(
        this.prefix + '/update-genera',
        this.payloadCreator(HandleFetch.UpdateGeneral)
    )
    
    public readonly updateDark = createAsyncThunk(
        this.prefix + '/update-dar',
        this.payloadCreator(HandleFetch.UpdateDark)
    )
    
    public readonly updateLight = createAsyncThunk(
        this.prefix + '/update-light',
        this.payloadCreator(HandleFetch.UpdateLight)
    )
}

export default new Styles('styled')
