import { createAsyncThunk } from '@reduxjs/toolkit'

import AsyncThunk from '../AsyncThunk'
import HandleFetch from './handle-fetch'

class Post extends AsyncThunk {
    public readonly create = createAsyncThunk(
        this.prefix + '/create',
        this.payloadCreator(HandleFetch.Create)
    )
    
    public readonly update = createAsyncThunk(
        this.prefix + '/update',
        this.payloadCreator(HandleFetch.Update)
    )
    
    public readonly getOne = createAsyncThunk(
        this.prefix + '/get-one',
        this.payloadCreator(HandleFetch.GetOne)
    )
    
    public readonly getManyMainPage = createAsyncThunk(
        this.prefix + '/get-many-main-page',
        this.payloadCreator(HandleFetch.GetMany)
    )
    
    public readonly addManyMainPage = createAsyncThunk(
        this.prefix + '/add-many-main-page',
        this.payloadCreator(HandleFetch.GetMany)
    )
    
    public readonly getManyAccountPage = createAsyncThunk(
        this.prefix + '/get-many-account-page',
        this.payloadCreator(HandleFetch.GetMany)
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

export default new Post('post')
