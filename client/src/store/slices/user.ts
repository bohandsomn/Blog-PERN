import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FulfilledState, InitialState, PendingState, RejectedState } from '../../types/Utility/StateType'
import authorizationAsyncThunk from '../../api/authorization/async-thunk'
import Token from '../../services/Token'

import type { UserDTO } from '../../types/user'

export const privacyOptions: Exclude<UserDTO['privacy'], null>[] = ['PRIVATE', 'PUBLIC']

export interface UserType extends UserDTO {
    isChanged: boolean
    password: string
}

const initialState: InitialState = {
    isLoading: true,
    isError: false,
    data: null
} 

const userSlice = createSlice({
    name: 'user',
    initialState: initialState as never as FulfilledState<UserType> | PendingState | RejectedState,
    reducers: {
        change: (state, action: PayloadAction<boolean>) => {
            if (state.data === null) {
                return
            }

            state.data.isChanged = action.payload
        },
        changeField: (state, action: PayloadAction<Partial<UserType>>) => {
            if (state.data === null) {
                return
            }

            state.data = { ...state.data, ...action.payload }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authorizationAsyncThunk.autoLogin.fulfilled, (state, action) => {
            const { accessToken, user } = action.payload
            Token.save(accessToken)

            state.isLoading = false
            state.data = { ...user, password: '', isChanged: false }
            state.isError = false
        })
        .addCase(authorizationAsyncThunk.autoLogin.pending, (state) => {
            state.isLoading = true
        })
        .addCase(authorizationAsyncThunk.autoLogin.rejected, (state) => {            
            state.isLoading = false
            state.isError = true
        })
        
        builder.addCase(authorizationAsyncThunk.login.fulfilled, (state, action) => {
            const { accessToken, user } = action.payload
            Token.save(accessToken)

            state.isLoading = false
            state.data = { ...user, password: '', isChanged: false }
            state.isError = false
        })
        .addCase(authorizationAsyncThunk.login.pending, (state) => {
            state.isLoading = true
        })
            .addCase(authorizationAsyncThunk.login.rejected, (state) => {            
            state.isLoading = false
            state.isError = true
        })
        
        builder.addCase(authorizationAsyncThunk.registration.fulfilled, (state, action) => {
            const { accessToken, user } = action.payload
            Token.save(accessToken)

            state.isLoading = false
            state.data = { ...user, password: '', isChanged: false }
            state.isError = false
        })
        .addCase(authorizationAsyncThunk.registration.pending, (state) => {
            state.isLoading = true
        })
        .addCase(authorizationAsyncThunk.registration.rejected, (state) => {            
            state.isLoading = false
            state.isError = true
        })

        builder.addCase(authorizationAsyncThunk.update.fulfilled, (state, action) => {
            const { accessToken, user } = action.payload
            Token.save(accessToken)

            state.isLoading = false
            state.data = { ...user, password: '', isChanged: false }
            state.isError = false
        })
        .addCase(authorizationAsyncThunk.update.pending, (state) => {
            state.isLoading = true
        })
        .addCase(authorizationAsyncThunk.update.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })

        builder.addCase(authorizationAsyncThunk.logout.fulfilled, (state) => {
            Token.delete()

            state.data = null
            state.isLoading = false
            state.isError = false
        })
        .addCase(authorizationAsyncThunk.logout.pending, (state) => {
            state.isLoading = true
        })
        .addCase(authorizationAsyncThunk.logout.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
    }
})

export const { change, changeField } = userSlice.actions

export default userSlice.reducer