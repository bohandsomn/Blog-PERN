import type CreateResponseUtility from '../types/Utility/CreateResponse'

class Response<Data> {
    public readonly data: Data
    public readonly message: string

    constructor(message: string, data: Data) {
        this.data = data
        this.message = message
    }
}

export default Response
