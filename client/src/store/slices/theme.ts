import { createSlice } from '@reduxjs/toolkit'

export type ThemeType = 'dark' | 'light'

const initialState = 'dark' as ThemeType

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggle: (state) => {
            const element = document.getElementById('app')

            if (element === null) {
                throw new Error()
            }

            if (element.classList.contains('dark')) {
                state = 'light'
                element.classList.remove('dark')
                element.classList.add('light')
            } else {
                state = 'dark'
                element.classList.remove('light')
                element.classList.add('dark')
            }

            return state
        }
    },
})

export const { toggle } = themeSlice.actions

export default themeSlice.reducer