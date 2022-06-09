import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import userAsyncThunk from '../../api/user/async-thunk'

import type { UserPreview } from '../../types/user'
import type { FulfilledState, PendingState, RejectedState } from '../../types/Utility/StateType'

export interface FollowersType {
    subscribers: FulfilledState<UserPreview[]> | PendingState | RejectedState 
    subscriptions: FulfilledState<UserPreview[]> | PendingState | RejectedState 
    current: UserPreview[] | null
}

const initialState: FollowersType = {
    subscribers: {
        data: null,
        isError: false,
        isLoading: true
    },
    subscriptions: {
        data: null,
        isError: false,
        isLoading: true
    },
    current: null
} 

const followersSlice = createSlice({
    name: 'followers',
    initialState,
    reducers: {
        setCurrent: (state, action: PayloadAction<'SUBSCRIBERS' | 'SUBSCRIPTIONS' | null>) => {
            if (action.payload === 'SUBSCRIPTIONS') {
                state.current = state.subscriptions.data
                return 
            } 
            if (action.payload === 'SUBSCRIBERS') {
                state.current = state.subscribers.data
                return 
            }

            state.current = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userAsyncThunk.getSubscribers.fulfilled, (state, action) => {
            state.subscribers.data = action.payload
            state.subscribers.isLoading = false
            state.subscribers.isError = false
        })
        .addCase(userAsyncThunk.getSubscribers.pending, (state) => {
            state.subscribers.isLoading = true
        })
        .addCase(userAsyncThunk.getSubscribers.rejected, (state) => {
            state.subscribers.isLoading = false
            state.subscribers.isError = true
        })

        builder.addCase(userAsyncThunk.getSubscriptions.fulfilled, (state, action) => {
            state.subscriptions.data = action.payload
            state.subscriptions.isLoading = false
            state.subscriptions.isError = false
        })
        .addCase(userAsyncThunk.getSubscriptions.pending, (state) => {
            state.subscriptions.isLoading = true
        })
        .addCase(userAsyncThunk.getSubscriptions.rejected, (state) => {
            state.subscriptions.isLoading = false
            state.subscriptions.isError = true
        })
    }
})

export const { setCurrent } = followersSlice.actions

export default followersSlice.reducer