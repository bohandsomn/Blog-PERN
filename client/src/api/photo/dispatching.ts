import Dispatching from '../Dispatching'

import Request from './request'
import asyncThunk from './async-thunk'

class Photo extends Dispatching {
    static get dispatch() {
        return new this()
    }

    public getOne = async (body: Request.GetOne = {}) => this.isDispatched(asyncThunk.getOne(body))

    public set = async (event?: React.ChangeEvent<HTMLInputElement>): Promise<boolean> => {
        const formData = await this.getFormData(event)

        if (formData === null) {
            return false
        }
        
        return this.isDispatched(asyncThunk.set(formData))
    }

    public update = async (event?: React.ChangeEvent<HTMLInputElement>): Promise<boolean> => {
        const formData = await this.getFormData(event)

        if (formData === null) {
            return false
        }
        
        return this.isDispatched(asyncThunk.update(formData))
    }

    public delete = async (body: Request.Delete = {}) => this.isDispatched(asyncThunk.delete(body))

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
}

export default Photo
