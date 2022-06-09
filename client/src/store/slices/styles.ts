import { createSlice } from '@reduxjs/toolkit'

import asyncThunk from '../../api/styles/async-thunk'
import Styles from '../../services/Styles'

import type { FulfilledState, PendingState, RejectedState } from '../../types/Utility/StateType'
import type { StylesDataWithVariables } from '../../types/styles'

const initialState: FulfilledState<StylesDataWithVariables> | PendingState | RejectedState = {
    data: null,
    isError: false,
    isLoading: true
}

const stylesSlice = createSlice({
    name: 'styles',
    initialState: initialState as FulfilledState<StylesDataWithVariables> | PendingState | RejectedState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(asyncThunk.get.fulfilled, (state, action) => {
            const { variables, ...styles } = action.payload

            Styles.setVariables(styles, variables)

            state.data = action.payload
            state.isLoading = false
            state.isError = false
        })
        .addCase(asyncThunk.get.pending, (state) => { 
            state.isLoading = true
        })
        .addCase(asyncThunk.get.rejected, (state) => {             
            state.isLoading = false
            state.isError = true
        })

        builder.addCase(asyncThunk.updateGeneral.fulfilled, (state, action) => {
            if (state.data === null) {
                return
            }

            const { general, ...styles } = action.payload

            Styles.setVariables(styles, {general})

            state.data.variables.general = general
        })
        .addCase(asyncThunk.updateGeneral.pending, () => { })
        .addCase(asyncThunk.updateGeneral.rejected, () => { })

        builder.addCase(asyncThunk.updateDark.fulfilled, (state, action) => {
            if (state.data === null) {
                return
            }

            const { dark, ...styles } = action.payload

            Styles.setVariables(styles, {general: dark})

            state.data.variables.general = dark
        })
        .addCase(asyncThunk.updateDark.pending, () => { })
        .addCase(asyncThunk.updateDark.rejected, () => { })

        builder.addCase(asyncThunk.updateLight.fulfilled, (state, action) => {
            if (state.data === null) {
                return
            }

            const { light, ...styles } = action.payload

            Styles.setVariables(styles, {general: light})

            state.data.variables.general = light
        })
        .addCase(asyncThunk.updateLight.pending, () => {  })
        .addCase(asyncThunk.updateLight.rejected, () => { })
    }
})

export default stylesSlice.reducer
