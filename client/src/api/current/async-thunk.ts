import { createAsyncThunk } from '@reduxjs/toolkit'

import AsyncThunk from '../AsyncThunk'
import HandleFetchPhoto from '../photo/handle-fetch'
import HandleFetchPost from '../post/handle-fetch'
import HandleFetchUser from '../user/handle-fetch'
import HandleFetchChat from '../chat/handle-fetch'

class Current extends AsyncThunk {
    public readonly getOnePhoto = createAsyncThunk(
        this.prefix + '/get-one-photo',
        this.payloadCreator(HandleFetchPhoto.GetOne)
    )

    public readonly getManyPost = createAsyncThunk(
        this.prefix + '/get-many-post',
        this.payloadCreator(HandleFetchPost.GetMany)
    )
    
    public readonly getOneUser = createAsyncThunk(
        this.prefix + '/get-one-user',
        this.payloadCreator(HandleFetchUser.GetOne)
    )
    
    public readonly getOnePost = createAsyncThunk(
        this.prefix + '/get-one-post',
        this.payloadCreator(HandleFetchPost.GetOne)
    )

    public readonly getOneChat = createAsyncThunk(
        this.prefix + '/get-one-chat',
        this.payloadCreator(HandleFetchChat.GetOne)
    )

    public readonly updateChat = createAsyncThunk(
        this.prefix + '/update-chat',
        this.payloadCreator(HandleFetchChat.Update)
    )

    public readonly updateLastMessageChat = createAsyncThunk(
        this.prefix + '/update-last-message-chat',
        this.payloadCreator(HandleFetchChat.UpdateLastMessage)
    )

    public readonly setPhotoChat = createAsyncThunk(
        this.prefix + '/set-photo-chat',
        this.payloadCreator(HandleFetchChat.SetPhoto)
    )

    public readonly deleteChat = createAsyncThunk(
        this.prefix + '/delete-chat',
        this.payloadCreator(HandleFetchChat.Delete)
    )

    // public readonly getUsers = createAsyncThunk(
    //     this.prefix + '/get-users',
    //     this.payloadCreator(HandleFetchUser.GetPreview)
    // )

    public readonly getManyByName = createAsyncThunk(
        this.prefix + '/get-many-by-name',
        this.payloadCreator(HandleFetchChat.GetManyByName)
    )
}

export default new Current('current')
