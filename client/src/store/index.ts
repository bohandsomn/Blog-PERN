import { configureStore } from '@reduxjs/toolkit'

import userSlise from './slices/user'
import postsSlise from './slices/posts'
import photoSlice from './slices/photo'
import followersSlice from './slices/followers'
import searchPostsSlice from './slices/searchPosts'
import currentSlice from './slices/current'
import themeSlice from './slices/theme'
import stylesSlice from './slices/styles'
import chatSlice from './slices/chat'

const store = configureStore({
    reducer: {
        user: userSlise,
        posts: postsSlise,
        photo: photoSlice,
        followers: followersSlice,
        searchPosts: searchPostsSlice,
        current: currentSlice,
        theme: themeSlice,
        styles: stylesSlice,
        chat: chatSlice,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch