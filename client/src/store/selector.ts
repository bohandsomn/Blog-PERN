import type { RootState } from '.'

export const chatSelector = (state: RootState) => state.chat
export const currentSelector = (state: RootState) => state.current
export const followersSelector = (state: RootState) => state.followers
export const photoSelector = (state: RootState) => state.photo
export const postsSelector = (state: RootState) => state.posts
export const searchPostsSelector = (state: RootState) => state.searchPosts
export const stylesSelector = (state: RootState) => state.styles
export const themeSelector = (state: RootState) => state.theme
export const userSelector = (state: RootState) => state.user
