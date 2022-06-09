import { createSlice } from '@reduxjs/toolkit'

import asyncThunk from '../../api/chat/async-thunk'
import currentAsyncThunk from '../../api/current/async-thunk'
import Request from '../../api/chat/request'

import type { ChatDTO } from '../../types/chat'

import type { FulfilledState, PendingState, RejectedState } from '../../types/Utility/StateType'

export const chatOptions: Request.Create['privacy'][] = ['PUBLIC', 'PRIVATE']

export interface ChatType {
    list: FulfilledState<ChatDTO[]> | PendingState | RejectedState
}

const initialState: ChatType = {
    list: {
        data: null,
        isError: false,
        isLoading: true
    }
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(asyncThunk.getMany.fulfilled, (state, action) => {
            state.list.data = action.payload
            state.list.isLoading = false
            state.list.isError = false
        })
        .addCase(asyncThunk.getMany.pending, (state) => {
            state.list.isLoading = true 
        })
        .addCase(asyncThunk.getMany.rejected, (state) => {            
            state.list.isLoading = false
            state.list.isError = true 
        })

        builder.addCase(asyncThunk.create.fulfilled, (state, action) => {
            if (state.list.data === null) {
                return
            }

            state.list.data = [...state.list.data, action.payload]
            state.list.isLoading = false
            state.list.isError = false
        })
        .addCase(asyncThunk.create.pending, (state) => {
            state.list.isLoading = true 
        })
        .addCase(asyncThunk.create.rejected, (state) => {            
            state.list.isLoading = false
            state.list.isError = true 
        })

        builder.addCase(currentAsyncThunk.updateChat.fulfilled, (state, action) => {
            if (state.list.data === null) {
                return
            }

            state.list.data = state.list.data.map((chatDTO) => {
                if (chatDTO.id === action.payload.id) {
                    return action.payload
                }

                return chatDTO
            })
            state.list.isLoading = false
            state.list.isError = false
        })
        .addCase(currentAsyncThunk.updateChat.pending, (state) => {
            state.list.isLoading = true 
        })
        .addCase(currentAsyncThunk.updateChat.rejected, (state) => {            
            state.list.isLoading = false
            state.list.isError = true 
        })
    }
})

export default chatSlice.reducer
