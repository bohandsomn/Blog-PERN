import { createSlice } from '@reduxjs/toolkit'
import asyncThunk from '../../api/photo/async-thunk'

import type { FulfilledState, InitialState, PendingState, RejectedState } from '../../types/Utility/StateType'
import type { PhotoDTO } from '../../types/photo'

interface PhotoType extends PhotoDTO { }

const initialState: InitialState = {
    isLoading: true,
    isError: false,
    data: null
}

const photoSlice = createSlice({
    name: 'photo',
    initialState: initialState as never as FulfilledState<PhotoType> | PendingState | RejectedState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(asyncThunk.getOne.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false
            state.isError = false
        })
        .addCase(asyncThunk.getOne.pending, (state) => {
            state.isLoading = true
        })
        .addCase(asyncThunk.getOne.rejected, (state) => {            
            state.isLoading = false
            state.isError = true
        })

        builder.addCase(asyncThunk.set.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false
            state.isError = false
        })
        .addCase(asyncThunk.set.pending, (state) => {
            state.isLoading = true
        })
        .addCase(asyncThunk.set.rejected, (state) => {            
            state.isLoading = false
            state.isError = true
        })

        builder.addCase(asyncThunk.update.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false
            state.isError = false
        })
        .addCase(asyncThunk.update.pending, (state) => {
            state.isLoading = true
        })
        .addCase(asyncThunk.update.rejected, (state) => {            
            state.isLoading = false
            state.isError = true
        })

        builder.addCase(asyncThunk.delete.fulfilled, (state) => {
            state.data = null
            state.isLoading = false
            state.isError = false
        })
        .addCase(asyncThunk.delete.pending, (state) => {
            state.isLoading = true
        })
        .addCase(asyncThunk.delete.rejected, (state) => {            
            state.isLoading = false
            state.isError = true
        })
    }
})

export default photoSlice.reducer