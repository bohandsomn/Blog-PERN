import { createAsyncThunk } from '@reduxjs/toolkit'

import AsyncThunk from '../AsyncThunk'
import HandleFetch from './handle-fetch'

class Authorization extends AsyncThunk {
    public readonly autoLogin = createAsyncThunk(
        this.prefix + '/auto-login',
        this.payloadCreator(HandleFetch.AutoLogin)
    )

    public readonly login = createAsyncThunk(
        this.prefix + '/login',
        this.payloadCreator(HandleFetch.Login)
    )

    public readonly registration = createAsyncThunk(
        this.prefix + '/registration',
        this.payloadCreator(HandleFetch.Registration)
    )

    public readonly update = createAsyncThunk(
        this.prefix + '/update',
        this.payloadCreator(HandleFetch.Update)
    )

    public readonly logout = createAsyncThunk(
        this.prefix + '/logout',
        this.payloadCreator(HandleFetch.Logout)
    )
}

export default new Authorization('authorization')
