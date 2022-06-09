import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import userAsyncThunk from '../../api/user/async-thunk'

import type Request from '../../api/post/request'
import type { UserPreview } from '../../types/user'

export interface SearchPostsType {
    query: Request.GetManyQuery
    fetched: UserPreview[]
    selected: UserPreview[]
}

const initialState: SearchPostsType = {
    query: {
        title: '',
        content: '',
        visibility: 'PUBLIC',
        userIds: [] as never as string
    },
    fetched: [],
    selected: []
}

const searchPostsSlice = createSlice({
    name: 'searchPosts',
    initialState,
    reducers: {
        changeSearchQuery: (state, action: PayloadAction<Partial<SearchPostsType['query']>>) => {
            state.query = {...state.query, ...action.payload}
            return state
        },
        setFetched: (state, action: PayloadAction<UserPreview[]>) => {
            state.fetched = action.payload
            return state
        },
        addUser: (state, action: PayloadAction<UserPreview>) => {
            state.selected = [...state.selected, action.payload]
            state.query.userIds = [...state.query.userIds, action.payload.id.toString()] as never as string
            return state
        },
        removeUser: (state, action: PayloadAction<UserPreview>) => {
            state.selected = state.selected.filter((user) => user.id !== action.payload.id)
            state.query.userIds = (state.query.userIds as never as string[]).filter((userId) => userId !== action.payload.id.toString()) as never as string
            return state
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userAsyncThunk.getPreview.fulfilled, (state, action) => {
            state.fetched = action.payload
        })
        .addCase(userAsyncThunk.getPreview.pending, () => { })
        .addCase(userAsyncThunk.getPreview.rejected, () => { })
    }
})

export const { changeSearchQuery, setFetched, addUser, removeUser } = searchPostsSlice.actions

export default searchPostsSlice.reducer