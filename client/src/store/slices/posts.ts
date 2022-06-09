import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import commentAsyncThunk from '../../api/comment/async-thunk'
import postAsyncThunk from '../../api/post/async-thunk'

import type { FulfilledState, PendingState, RejectedState } from '../../types/Utility/StateType'
import type { PostDTO } from '../../types/post'
import type Request from '../../api/post/request'

export const postOptions: Request.Create['visibility'][] = ['PUBLIC', 'PRIVATE']

export interface PostType {
    mainPage: FulfilledState<PostDTO[]> | PendingState | RejectedState 
    accountPage: FulfilledState<PostDTO[]> | PendingState | RejectedState 
    newPost: Request.Create
}

const initialState: PostType = {
    mainPage: {
        isError: false,
        isLoading: true,
        data: null
    },
    accountPage: {
        isError: false,
        isLoading: true,
        data: null 
    },
    newPost: {
        title: '',
        content: '',
        visibility: 'PUBLIC'
    }
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        changeNewPost: (state, action: PayloadAction<Partial<Request.Create>>) => {
            state.newPost = {...state.newPost, ...action.payload}
            return state
        },
    },
    extraReducers: (builder) => {
        builder.addCase(commentAsyncThunk.create.fulfilled, (state, action) => {
            if (state.mainPage.data === null || state.accountPage.data === null) {
                return
            }

            state.mainPage.data = state.mainPage.data.map((post) => {
                if (post.id === action.payload.postId) {
                    post.comments = [action.payload, ...post.comments]
                }

                return post
            })

            state.accountPage.data = state.accountPage.data.map((post) => {
                if (post.id === action.payload.postId) {
                    post.comments = [action.payload, ...post.comments]
                }

                return post
            })

            return state
        })
            .addCase(commentAsyncThunk.create.pending, () => { })
            .addCase(commentAsyncThunk.create.rejected, () => { })

        builder.addCase(commentAsyncThunk.update.fulfilled, (state, action) => {
            if (state.mainPage.data === null || state.accountPage.data === null) {
                return
            }

            state.mainPage.data = state.mainPage.data.map((post) => {
                if (post.id === action.payload.postId) {
                    post.comments = post.comments.map((comment) => {
                        if (comment.id === action.payload.id) {
                            return action.payload
                        }

                        return comment
                    })
                }

                return post
            })

            state.accountPage.data = state.accountPage.data.map((post) => {
                if (post.id === action.payload.postId) {
                    post.comments = post.comments.map((comment) => {
                        if (comment.id === action.payload.id) {
                            return action.payload
                        }

                        return comment
                    })
                }

                return post
            })

            return state
        })
            .addCase(commentAsyncThunk.update.pending, () => { })
            .addCase(commentAsyncThunk.update.rejected, () => { })

        builder.addCase(commentAsyncThunk.delete.fulfilled, () => { })
            .addCase(commentAsyncThunk.delete.pending, () => { })
            .addCase(commentAsyncThunk.delete.rejected, () => { })

        builder.addCase(postAsyncThunk.create.fulfilled, (state, action) => {
            state.accountPage.data?.push(action.payload)
            state.newPost = initialState.newPost
        })
            .addCase(postAsyncThunk.create.pending, () => { })
            .addCase(postAsyncThunk.create.rejected, (state) => {
                state.newPost = initialState.newPost
            })

        builder.addCase(postAsyncThunk.update.fulfilled, (state, action) => {
            const data = state.accountPage.data?.map((post) => {
                if (post.link === action.payload.link) {
                    return action.payload
                }

                return post
            })

            if (data !== undefined) {
                state.accountPage.data = data
            }
        })
            .addCase(postAsyncThunk.update.pending, () => { })
            .addCase(postAsyncThunk.update.rejected, () => { })

        builder.addCase(postAsyncThunk.getOne.fulfilled, () => { })
            .addCase(postAsyncThunk.getOne.pending, () => { })
            .addCase(postAsyncThunk.getOne.rejected, () => { })

        builder.addCase(postAsyncThunk.getManyMainPage.fulfilled, (state, action) => {
            state.mainPage.isLoading = false
            state.mainPage.isError = false
            state.mainPage.data = action.payload
        })
            .addCase(postAsyncThunk.getManyMainPage.pending, (state) => {
                state.mainPage.isLoading = true
            })
            .addCase(postAsyncThunk.getManyMainPage.rejected, (state) => {
                state.mainPage.isLoading = false
                state.mainPage.isError = true
            })

        builder.addCase(postAsyncThunk.addManyMainPage.fulfilled, (state, action) => {
            if (state.mainPage.data === null) {
                return
            }

            state.mainPage.data = [...state.mainPage.data, ...action.payload]
        })
        .addCase(postAsyncThunk.addManyMainPage.pending, () => { })
        .addCase(postAsyncThunk.addManyMainPage.rejected, () => { })

        builder.addCase(postAsyncThunk.getManyAccountPage.fulfilled, (state, action) => {
            state.accountPage.isLoading = false
            state.accountPage.isError = false
            state.accountPage.data = action.payload
        })
            .addCase(postAsyncThunk.getManyAccountPage.pending, (state) => {
                state.accountPage.isLoading = true
            })
            .addCase(postAsyncThunk.getManyAccountPage.rejected, (state) => {
                state.accountPage.isLoading = false
                state.accountPage.isError = true
            })

        builder.addCase(postAsyncThunk.delete.fulfilled, () => { })
            .addCase(postAsyncThunk.delete.pending, () => { })
            .addCase(postAsyncThunk.delete.rejected, () => { })
    }
})

export const { changeNewPost } = postsSlice.actions

export default postsSlice.reducer
