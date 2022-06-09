import asyncThunk from './async-thunk'
import Dispatching from '../Dispatching'

import type Request from './request'

class Chat extends Dispatching {
    static get dispatch() {
        return new this()
    }

    public create = async (body: Request.Create) => this.isDispatched(asyncThunk.create(body))

    public getMany = async (body: Request.GetMany) => this.isDispatched(asyncThunk.getMany(body))
}

export default Chat
