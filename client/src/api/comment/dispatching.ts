import asyncThunk from './async-thunk'
import Dispatching from '../Dispatching'

import type Request from './request'

class Comment extends Dispatching {
    static get dispatch() {
        return new this()
    }

    public create = async (body: Request.Create) => this.isDispatched(asyncThunk.create(body))

    public update = async (body: Request.Update) => this.isDispatched(asyncThunk.update(body))

    public delete = async (link: Request.Delete) => this.isDispatched(asyncThunk.delete(link))

    public like =  async (body: Request.Like) => this.isDispatched(asyncThunk.like(body))

    public dislike =  async (body: Request.Dislike) => this.isDispatched(asyncThunk.dislike(body))
}

export default Comment
