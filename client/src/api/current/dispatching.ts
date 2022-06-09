import Dispatching from '../Dispatching'
import asyncThunk from './async-thunk'

import type PhotoRequest from '../photo/request'
import type PostRequest from '../post/request'
import type UserRequest from '../user/request'
import type ChatRequest from '../chat/request'

class Current extends Dispatching {
    static get dispatch() {
        return new this()
    }

    public getOnePhoto = async (body: PhotoRequest.GetOne = {}) => this.isDispatched(asyncThunk.getOnePhoto(body))

    public getManyPost = async (body: PostRequest.GetManyQuery) => this.isDispatched(asyncThunk.getManyPost(body))
    
    public getOneUser = async (body: UserRequest.GetOne) => this.isDispatched(asyncThunk.getOneUser(body))

    public getOnePost = async (body: PostRequest.GetOneParams) => this.isDispatched(asyncThunk.getOnePost(body))
    
    public getOneChat = async (body: ChatRequest.GetOne) => this.isDispatched(asyncThunk.getOneChat(body))
    
    public updateChat = async (body: ChatRequest.Update) => this.isDispatched(asyncThunk.updateChat(body))

    public updateLastMessageChat = async (body: ChatRequest.UpdateLastMessage) => this.isDispatched(asyncThunk.updateLastMessageChat(body))

    public setPhotoChat = async (input: { chatId: ChatRequest.SetPhoto, event: React.ChangeEvent<HTMLInputElement> }) => {
        
        const formData = await this.getFormData(input.event)

        if (formData === null) {
            return false
        }
        
        return this.isDispatched(asyncThunk.setPhotoChat({
            chatId: input.chatId,
            formData: formData
        }))
    
    }

    public deleteChat = async (link: ChatRequest.Delete) => this.isDispatched(asyncThunk.deleteChat(link))

    private getFormData = async (event?: React.ChangeEvent<HTMLInputElement>): Promise<FormData | null> => {
        if (event === undefined) {
            return null
        }

        if (event.target.files === null) {
            return null
        }
    
        const [file] = event.target.files
    
        const formData = new FormData()
        formData.append(event.target.name, file)

        return formData
    }

    public getManyByNameChat = async (body: ChatRequest.GetManyByName) => this.isDispatched(asyncThunk.getManyByName(body))
}

export default Current
