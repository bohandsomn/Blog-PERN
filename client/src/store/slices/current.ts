import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import asyncThunk from '../../api/current/async-thunk'

import type { FulfilledState, PendingState, RejectedState } from '../../types/Utility/StateType'
import type { PhotoDTO } from '../../types/photo'
import type { PostDTO } from '../../types/post'

import type { PublicUserDTO, PrivateUserDTO } from '../../types/user'
import type { ChatDTO, IChat } from '../../types/chat'
import type { MessageDTO } from '../../types/message'

export interface CurrentType {
    user: FulfilledState<PublicUserDTO | PrivateUserDTO> | PendingState | RejectedState 
    photo: FulfilledState<PhotoDTO> | PendingState | RejectedState 
    posts: FulfilledState<PostDTO[]> | PendingState | RejectedState
    post: FulfilledState<PostDTO> | PendingState | RejectedState,
    chat: FulfilledState<ChatDTO> | PendingState | RejectedState
    chats: {
        fetched: ChatDTO[]
        selected: ChatDTO[]
    }
    messages: MessageDTO[]
}

export const privacy: IChat['privacy'][] = ['PUBLIC', 'PRIVATE']

const initialState: CurrentType = {
    user: {
        data: null,
        isError: false,
        isLoading: true
    },
    photo: {
        data: null,
        isError: false,
        isLoading: true
    },
    posts: {
        data: null,
        isError: false,
        isLoading: true
    },
    post: {
        data: null,
        isError: false,
        isLoading: true
    },
    chat: {
        data: null,
        isError: false,
        isLoading: true
    },
    chats: {
        fetched: [],
        selected: []
    },
    messages: []
} 

const currentSlice = createSlice({
    name: 'current',
    initialState,
    reducers: {
        setCurrentMessages: (state, action: PayloadAction<{ chatId: number, messages: MessageDTO[]}>) => {
            if (state.chat.data?.id === action.payload.chatId) {
                state.messages = [...state.messages, ...action.payload.messages]
                
                const map = new Map(
                    state.messages.map((messageDTO) => [messageDTO.id, messageDTO])
                )
                
                state.messages = [...map.values()]
                return state
            }

            state.messages = action.payload.messages
        },
        addCurrentMessage: (state, action: PayloadAction<MessageDTO>) => {
            state.messages = [...state.messages, action.payload]
        },
        selectChat: (state, action: PayloadAction<ChatDTO>) => {
            state.chats.selected = [
                ...state.chats.selected,
                action.payload
            ]
        },
        clearUser: (state) => {
            state.chats.fetched = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncThunk.getOneUser.fulfilled, (state, action) => {
            state.user.data = action.payload
            state.user.isLoading = false
            state.user.isError = false
        })
        .addCase(asyncThunk.getOneUser.pending, (state) => {
            state.user.isLoading = true 
        })
        .addCase(asyncThunk.getOneUser.rejected, (state) => {            
            state.user.isLoading = false
            state.user.isError = true 
        })

        builder.addCase(asyncThunk.getOnePhoto.fulfilled, (state, action) => {
            state.photo.data = action.payload
            state.photo.isLoading = false
            state.photo.isError = false
        })
        .addCase(asyncThunk.getOnePhoto.pending, (state) => {
            state.photo.isLoading = true 
        })
        .addCase(asyncThunk.getOnePhoto.rejected, (state) => {            
            state.photo.isLoading = false
            state.photo.isError = true 
        })

        builder.addCase(asyncThunk.getManyPost.fulfilled, (state, action) => {
            state.posts.data = action.payload
            state.posts.isLoading = false
            state.posts.isError = false
        })
        .addCase(asyncThunk.getManyPost.pending, (state) => {
            state.posts.isLoading = true
        })
        .addCase(asyncThunk.getManyPost.rejected, (state) => {
            state.posts.isLoading = false
            state.posts.isError = true
        })

        builder.addCase(asyncThunk.getOnePost.fulfilled, (state, action) => {
            state.post.data = action.payload
            state.post.isLoading = false
            state.post.isError = false
        })
        .addCase(asyncThunk.getOnePost.pending, (state) => {
            state.post.isLoading = true
        })
        .addCase(asyncThunk.getOnePost.rejected, (state) => {
            state.post.isLoading = false
            state.post.isError = true
        })

        builder.addCase(asyncThunk.getOneChat.fulfilled, (state, action) => {
            state.chat.data = action.payload
            state.chat.isLoading = false
            state.chat.isError = false
        })
        .addCase(asyncThunk.getOneChat.pending, (state) => {
            state.chat.isLoading = true 
        })
        .addCase(asyncThunk.getOneChat.rejected, (state) => {            
            state.chat.isLoading = false
            state.chat.isError = true 
        })

        builder.addCase(asyncThunk.getManyByName.fulfilled, (state, action) => {
            state.chats.fetched = action.payload
        })
        .addCase(asyncThunk.getManyByName.pending, () => { })
        .addCase(asyncThunk.getManyByName.rejected, () => { })
    }
})

export const { 
    setCurrentMessages, 
    addCurrentMessage, 
    selectChat, 
    clearUser 
} = currentSlice.actions

export default currentSlice.reducer