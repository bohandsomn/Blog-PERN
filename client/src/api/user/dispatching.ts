import Dispatching from '../Dispatching'
import asyncThunk from './async-thunk'

import type Request from './request'

class User extends Dispatching {
    static get dispatch() {
        return new this()
    }

    public getSubscribers = async () => this.isDispatched(asyncThunk.getSubscribers())

    public getSubscriptions = async () => this.isDispatched(asyncThunk.getSubscriptions())

    public getPreview = async (body: Request.GetPreview) => this.isDispatched(asyncThunk.getPreview(body))

    public subscribe = async (body: Request.SubscribeParams) => this.isDispatched(asyncThunk.subscribe(body))

    public unsubscribe = async (body: Request.UnsubscribeParams) => this.isDispatched(asyncThunk.unsubscribe(body))
}

export default User
